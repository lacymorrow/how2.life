import { db, isDatabaseInitialized } from "@/server/db";
import { guideEntries } from "@/server/db/schema";
import { and, desc, eq, ilike, or, sql } from "drizzle-orm";
import { cache } from "react";
import { isSSR } from "@/lib/utils/runtime";
import pluralize from "pluralize";

// Since we're in a service, we can assume the database is initialized
// The connection is handled at the app level
const database = db!;

function normalizeSearchTerm(searchTerm: string): string {
	// Convert to lowercase and trim
	let normalized = searchTerm.toLowerCase().trim();

	// Remove special characters and extra spaces
	normalized = normalized.replace(/[^\w\s-]/g, "").replace(/\s+/g, " ");

	// Get the singular form of the word
	normalized = pluralize.singular(normalized);

	return normalized;
}

export const guideService = {
	getSimilarSearches: cache(async (searchTerm: string, limit = 5) => {
		if (!searchTerm?.trim()) return [];

		try {
			const normalizedTerm = normalizeSearchTerm(searchTerm);

			// Use simpler search during SSR to avoid similarity function
			if (isSSR()) {
				return database.query.guideEntries.findMany({
					where: or(
						eq(guideEntries.searchTerm, normalizedTerm),
						ilike(guideEntries.searchTerm, `%${normalizedTerm}%`),
						ilike(guideEntries.searchVector, `%${normalizedTerm}%`),
					),
					orderBy: [desc(guideEntries.popularity)],
					limit,
					with: {
						category: true,
					},
				});
			}

			// Use full similarity search at runtime
			return database.query.guideEntries.findMany({
				where: and(
					or(
						ilike(guideEntries.searchTerm, `%${normalizedTerm}%`),
						ilike(guideEntries.searchVector, `%${normalizedTerm}%`),
					),
					sql`similarity(${guideEntries.searchTerm}, ${normalizedTerm}) > 0.3`,
				),
				orderBy: [
					// Order by similarity score first, then by popularity
					sql`similarity(${guideEntries.searchTerm}, ${normalizedTerm}) DESC`,
					desc(guideEntries.popularity),
				],
				limit,
				with: {
					category: true,
				},
			});
		} catch (error) {
			console.error("[Guide Service] Error in getSimilarSearches:", error);
			throw error;
		}
	}),

	getRecentEntries: cache(async (limit = 10) => {
		return database.query.guideEntries.findMany({
			orderBy: [desc(guideEntries.createdAt)],
			limit,
			with: {
				category: true,
			},
		});
	}),

	getPopularEntries: cache(async (limit = 10) => {
		return database.query.guideEntries.findMany({
			orderBy: [desc(guideEntries.popularity)],
			limit,
			with: {
				category: true,
			},
		});
	}),

	findExistingEntry: async (searchTerm: string) => {
		try {
			const normalizedTerm = normalizeSearchTerm(searchTerm);

			// Use simpler search during SSR to avoid similarity function
			if (isSSR()) {
				return database.query.guideEntries.findFirst({
					where: or(
						eq(guideEntries.searchTerm, normalizedTerm),
						ilike(guideEntries.searchTerm, `%${normalizedTerm}%`),
					),
					with: {
						category: true,
						sourceCrossReferences: {
							with: {
								targetEntry: true,
							},
						},
					},
				});
			}

			// Find the most similar existing entry
			const existingEntry = await database.query.guideEntries.findFirst({
				where: sql`similarity(${guideEntries.searchTerm}, ${normalizedTerm}) > 0.3`,
				orderBy: [
					// Order by similarity score
					sql`similarity(${guideEntries.searchTerm}, ${normalizedTerm}) DESC`,
					desc(guideEntries.popularity),
				],
				with: {
					category: true,
					sourceCrossReferences: {
						with: {
							targetEntry: true,
						},
					},
				},
			});

			if (existingEntry) {
				try {
					// Increment popularity only at runtime
					await database
						.update(guideEntries)
						.set({
							popularity: sql`${guideEntries.popularity} + 1`,
							updatedAt: new Date(),
						})
						.where(eq(guideEntries.id, existingEntry.id));
				} catch (updateError) {
					console.error("[Guide Service] Error updating entry popularity:", updateError);
					// Don't throw the error since this is not critical
				}
			}

			return existingEntry;
		} catch (error) {
			console.error("[Guide Service] Error in findExistingEntry:", error);
			throw error;
		}
	},

	createEntry: async (entry: {
		searchTerm: string;
		content: string;
		travelAdvice: string;
		whereToFind: string;
		whatToAvoid: string;
		funFact: string;
		advertisement: string;
		reliability: number;
		dangerLevel: number;
	}) => {
		try {
			const normalizedTerm = normalizeSearchTerm(entry.searchTerm);

			// Generate search vector with more comprehensive terms
			const searchVector = [
				normalizedTerm,
				pluralize.plural(normalizedTerm), // Add plural form
				...normalizedTerm.split(" "),
				...entry.content.toLowerCase().split(/\W+/),
				...entry.whereToFind.toLowerCase().split(/\W+/),
				...entry.whatToAvoid.toLowerCase().split(/\W+/),
			]
				.filter(Boolean)
				.join(" ");

			const [newEntry] = await database
				.insert(guideEntries)
				.values({
					searchTerm: normalizedTerm,
					content: entry.content,
					travelAdvice: entry.travelAdvice,
					whereToFind: entry.whereToFind,
					whatToAvoid: entry.whatToAvoid,
					funFact: entry.funFact,
					advertisement: entry.advertisement,
					reliability: entry.reliability,
					dangerLevel: entry.dangerLevel,
					searchVector,
					popularity: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				})
				.returning();

			return newEntry;
		} catch (error) {
			console.error("[Guide Service] Error in createEntry:", error);
			throw error;
		}
	},
};
