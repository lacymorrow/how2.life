import { siteConfig } from "@/config/site";
import { mkdir, readdir, rm, writeFile } from "fs/promises";
import { extname, join } from "path";
import type { RegistryTypeValue } from "../schema";

/**
 * Attribution comment added to generated files
 */
export const attribution = `/*
 * This file was generated by ShipKit.
 * Learn more at ${siteConfig.url}
 */
`;

/**
 * Checks if a file is a TypeScript file
 * Includes: .ts, .tsx, .preview.ts, .preview.tsx
 * Excludes: metadata.ts, .meta.ts
 */
export const isTypescriptFile = (filepath: string): boolean => {
	const ext = extname(filepath);
	const filename = filepath.split("/").pop() || "";
	return (
		(ext === ".ts" || ext === ".tsx") &&
		filename !== "metadata.ts" &&
		!filename.endsWith(".meta.ts")
	);
};

/**
 * Gets all files in a directory recursively
 */
export const getAllFiles = async (dir: string): Promise<string[]> => {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map(async (entry) => {
			const fullPath = join(dir, entry.name);
			return entry.isDirectory() ? await getAllFiles(fullPath) : fullPath;
		}),
	);

	return files.flat();
};

/**
 * Writes a registry file as JSON
 */
export const writeRegistryFile = async (
	path: string,
	content: any,
): Promise<void> => {
	await writeFile(path, JSON.stringify(content, null, 2), "utf-8");
};

/**
 * Cleans a directory by removing all JSON files
 */
export const cleanDirectory = async (dir: string): Promise<void> => {
	try {
		// Create directory if it doesn't exist
		await mkdir(dir, { recursive: true });

		// Recursively find and remove all JSON files
		const removeJsonFiles = async (directory: string) => {
			const entries = await readdir(directory, { withFileTypes: true });

			for (const entry of entries) {
				const fullPath = join(directory, entry.name);
				if (entry.isDirectory()) {
					await removeJsonFiles(fullPath);
					// Remove empty directories after cleaning JSON files
					const remainingFiles = await readdir(fullPath);
					if (remainingFiles.length === 0) {
						await rm(fullPath, { recursive: true });
					}
				} else if (entry.name.endsWith(".json")) {
					await rm(fullPath);
				}
			}
		};

		await removeJsonFiles(dir);
		console.log("  ✨ Cleaned all JSON files");
	} catch (error) {
		console.error("Failed to clean JSON files:", error);
		throw error;
	}
};

/**
 * Gets the directory name for a registry type
 */
export const getDirName = (type: RegistryTypeValue): string => {
	return type.replace("registry:", "");
};

/**
 * Gets the full path for a registry item
 */
export const getRegistryItemPath = (
	outputDir: string,
	library: string,
	theme: string,
	type: RegistryTypeValue,
	name: string,
): string => {
	const dirName = getDirName(type);
	return join(outputDir, library, theme, dirName, `${name}.json`);
};

/**
 * Gets the preview path for a registry item
 */
export const getPreviewPath = (
	outputDir: string,
	library: string,
	theme: string,
	type: RegistryTypeValue,
	name: string,
): string => {
	const dirName = getDirName(type);
	return join(outputDir, library, theme, dirName, `${name}.preview.tsx`);
};

/**
 * Formats progress for console output
 */
export const formatProgress = (current: number, total: number): string => {
	const percentage = Math.round((current / total) * 100);
	const width = 30;
	const filled = Math.round((width * current) / total);
	const empty = width - filled;
	const bar = "█".repeat(filled) + "░".repeat(empty);
	return `${bar} ${percentage}% (${current}/${total})`;
};
