import AnimatedCounter from "@/app/(app)/(landing)/_components/animated-counter";
import { FeaturesGrid } from "@/app/(app)/(landing)/_components/features-grid";
import { Spotlight } from "@/app/(app)/(landing)/_components/spotlight";
import { AIDemo } from "@/components/blocks/ai-demo";
import { PricingSectionSingle } from "@/components/blocks/pricing-section";
import AnimatedButton from "@/components/buttons/animated-button/animated-button";
import { Icons } from "@/components/images/icons";
import { JsonLd } from "@/components/primitives/json-ld";
import { Link } from "@/components/primitives/link-with-transition";
import ExampleMasonry from "@/components/primitives/masonry";
import {
	Section,
	SectionContent,
	SectionCopy,
	SectionHeader,
	SectionTitle,
} from "@/components/primitives/section";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import BlurFade from "@/components/ui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { Countdown } from "@/components/ui/countdown";
import { FeaturesTimed } from "@/components/ui/cui/features-timed";
import { SimpleFeaturesCards } from "@/components/ui/cui/simple-features-cards";
import Meteors from "@/components/ui/meteors";
import NumberTicker from "@/components/ui/number-ticker";
import { Vortex } from "@/components/ui/vortex";
import { constructMetadata } from "@/config/metadata";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import type { SearchParams } from "@/types/utils";
import { StarFilledIcon } from "@radix-ui/react-icons";
import {
	IconBrandAdobe,
	IconBrandDeno,
	IconBrandOpenai,
	IconBrandStripeFilled,
	IconBrandVercelFilled
} from "@tabler/icons-react";
import {
	ArrowUp,
	BoneIcon,
	Calculator,
	Check,
	ChevronRight,
	DatabaseIcon,
	LockKeyholeIcon,
	RefreshCw,
	Shield,
	Sparkles,
	Star,
	Timer,
} from "lucide-react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { ComparisonTable } from "./_components/comparison-table";
import { FAQ } from "./_components/faq";
import { FeaturesCards } from "./_components/features-cards";
import { HeroDemo } from "./_components/hero-demo";
import { ParticlesHero } from "./_components/particles-hero";
import PrimaryCta from "./_components/primary-cta";
import { ROICalculator } from "./_components/roi-calculator";
import { SocialDock } from "./_components/social-dock";
import { SocialMarquee } from "./_components/social-marquee";
import { SocialProof } from "./_components/social-proof";

const headings = [
	"Ship Your Next Big Thing",
	"From Idea to Launch in Days",
	"The Ultimate Dev Toolkit",
	"Enterprise-Ready in Minutes",
];

export const metadata: Metadata = constructMetadata({
	title: "ShipKit - The Ultimate Next.js Stack | Launch Your SaaS in Days",
	description: "Join top startups using ShipKit to launch faster. Get a production-ready Next.js stack with auth, AI, payments & more. Save $50k+ in development costs.",
});

const LAUNCH_END_DATE = "2025-05-10T23:59:59";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<SearchParams>;
}) {
	const resolvedSearchParams = await searchParams;
	return (
		<>
			<JsonLd organization website />
			<div className="flex flex-col gap-20 overflow-hidden">
				<ParticlesHero>
					<div
						className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl"
						aria-hidden="true"
					>
						<div
							className="aspect-[1155/678] w-[72.1875rem] animate-galaxy-shimmer bg-gradient-to-tr from-[#ff80b5] via-[#9089fc] to-[#ff80b5] opacity-0"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>
					<div className="flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center mt-header">
						<div className="relative mx-auto flex min-h-64 max-w-[80rem] flex-col items-center justify-center gap-4 px-6 text-center md:px-8">
							<BlurFade delay={1} duration={1} inView>
								<div className="flex flex-col items-center gap-4">
									<Link href={routes?.external?.bones} className="group">
										<AnimatedGradientText className="bg-blue">
											<div className="flex items-center gap-2">
												<div className="flex items-center">
													<BoneIcon className="h-5 w-5" />
													<hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
													<span className="text-sm font-medium">Introducing Shipkit Bones</span>
												</div>
												<ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
											</div>
										</AnimatedGradientText>
									</Link>
									<div className="flex items-center gap-2">
										<div className="flex -space-x-2">
											<div className="h-8 w-8 rounded-full border-2 border-white bg-primary-foreground flex items-center justify-center">
												<IconBrandVercelFilled className="h-5 w-5" />
											</div>
											<div className="h-8 w-8 rounded-full border-2 border-white bg-primary-foreground flex items-center justify-center">
												<IconBrandStripeFilled className="h-5 w-5" />
											</div>
											<div className="h-8 w-8 rounded-full border-2 border-white bg-primary-foreground flex items-center justify-center">
												<IconBrandAdobe className="h-5 w-5" />
											</div>
										</div>
										<span className="text-sm text-gray-600">Built with the stack used by top startups</span>
									</div>
								</div>
							</BlurFade>

							<BlurFade delay={0.5} duration={0.5} inView>
								<h1 className="text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
									Ship Production Apps<br />10x Faster
								</h1>
							</BlurFade>

							<BlurFade delay={1} duration={1} inView>
								<div className="animate-fade-in mb-8 translate-y-[-1rem] text-balance text-lg tracking-tight [--animation-delay:400ms] md:text-xl">
									Get a complete startup stack with auth, AI, payments & more.<br />
									<span className="font-medium text-primary">Save $50k+ in development costs</span> and launch in days, not months.
								</div>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
									<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 dark:bg-green-900/20">
										<Check className="h-5 w-5 text-green-500" />
										<span className="text-sm">Next.js 15</span>
									</div>
									<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
										<Check className="h-5 w-5 text-blue-500" />
										<span className="text-sm">Integrated AI Workflows</span>
									</div>
									<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20">
										<Check className="h-5 w-5 text-purple-500" />
										<span className="text-sm">Authentication + Payments</span>
									</div>
								</div>
							</BlurFade>
						</div>

						<div className="mt-8 flex flex-col items-center justify-center gap-4">
							<BlurFade delay={2.5} duration={1} inView>
								<div className="flex flex-col items-center gap-4">
									<Countdown targetDate={LAUNCH_END_DATE} variant="warning" className="mb-4" />
									<div className="flex gap-4">
										<Link
											href={routes.auth.signIn}
											className={buttonVariants({ variant: "outline", size: "lg" })}
										>
											View Demo →
										</Link>
										<PrimaryCta />
									</div>
									<div className="flex items-center gap-4 mt-4">
										<div className="flex items-center gap-2">
											<Shield className="h-4 w-4 text-green-500" />
											<span className="text-sm text-gray-600">30-Day Refund</span>
										</div>
										<div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
										<div className="flex items-center gap-2">
											<Timer className="h-4 w-4 text-green-500" />
											<span className="text-sm text-gray-600">Instant Access</span>
										</div>
										<div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
										<div className="flex items-center gap-2">
											<Star className="h-4 w-4 text-yellow-500" />
											<span className="text-sm text-gray-600">Only 7 spots left</span>
										</div>
									</div>
								</div>
							</BlurFade>
						</div>



						<Meteors number={4} />
					</div>
				</ParticlesHero>

				<Section className="relative">
					<SectionHeader>
						Stop Reinventing the Wheel
					</SectionHeader>
					<SectionContent>
						<p className="text-lg text-center max-w-3xl mx-auto">
							The average startup spends 6 months and $150,000 building basic infrastructure.
							ShipKit gives you a production-ready codebase that's powering real companies today.
							Focus on what makes your product unique, not reinventing auth and payments.
						</p>
					</SectionContent>
				</Section>

				<Suspense>
					<SocialProof />

					<FeaturesCards />

					<Section className="relative">
						<SectionHeader>
							The Enterprise-Grade Stack
						</SectionHeader>
						<SectionContent>
							<div className="text-center max-w-2xl mx-auto mb-8">
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
									<Star className="h-4 w-4" />
									<span>Used by Fortune 500 Companies</span>
								</div>
								<p className="text-lg mb-6">
									Launch with the same battle-tested stack used by Vercel, Stripe, and other unicorns.
									Every component is optimized for scale and maintained by industry experts.
								</p>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
									<div className="p-6 rounded-lg border border-gray-100 dark:border-gray-800 relative group hover:border-primary/50 transition-colors">
										<div className="absolute -top-3 left-4 px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
											Most Popular
										</div>
										<h3 className="font-semibold mb-2">Lightning Fast</h3>
										<p className="text-sm text-gray-600 dark:text-gray-300">Next.js 15 + React Server Components for instant page loads</p>
									</div>
									<div className="p-6 rounded-lg border border-gray-100 dark:border-gray-800 relative group hover:border-primary/50 transition-colors">
										<div className="absolute -top-3 left-4 px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
											Enterprise Ready
										</div>
										<h3 className="font-semibold mb-2">Type-Safe</h3>
										<p className="text-sm text-gray-600 dark:text-gray-300">End-to-end TypeScript with zero runtime errors</p>
									</div>
									<div className="p-6 rounded-lg border border-gray-100 dark:border-gray-800 relative group hover:border-primary/50 transition-colors">
										<div className="absolute -top-3 left-4 px-2 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-medium rounded-full">
											New
										</div>
										<h3 className="font-semibold mb-2">AI-Powered</h3>
										<p className="text-sm text-gray-600 dark:text-gray-300">OpenAI integration with custom GPTs built-in</p>
									</div>
								</div>
								<div className="flex flex-col items-center gap-4">
									<AnimatedButton>Start Building Now</AnimatedButton>
									<div className="flex items-center gap-2 text-sm text-gray-500">
										<Shield className="h-4 w-4" />
										<span>Enterprise-grade security & scalability included</span>
									</div>
								</div>
							</div>
							<div className="text-center space-y-2">
								<span className="block text-sm font-medium">30-Day Money-Back Guarantee</span>
								<span className="block text-sm text-gray-500">
									No questions asked. Not happy? Get a full refund.
									<Link
										href={routes.terms}
										className={buttonVariants({ variant: "link", size: "sm" })}
									>
										See Terms →
									</Link>
								</span>
							</div>
						</SectionContent>
					</Section>


					<Section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
						<SectionHeader>
							Why Start Building Now?
						</SectionHeader>
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-8">
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
									<Timer className="h-4 w-4" />
									<span>Limited Time Launch Offer</span>
								</div>
								<p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
									The tech landscape is changing faster than ever. Here's why successful founders are launching with ShipKit today:
								</p>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
								<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-all">
									<div className="text-purple-500 mb-4">
										<Sparkles className="h-8 w-8" />
									</div>
									<h3 className="text-xl font-semibold mb-4">The AI Revolution</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										Every day without AI features is a day your competitors get ahead. Launch with production-ready AI capabilities from day one.
									</p>
									<div className="pt-4 border-t border-gray-100 dark:border-gray-700">
										<div className="text-sm font-medium mb-2">What You Get:</div>
										<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Custom GPT Integration</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>AI Analytics Dashboard</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Cost Optimization Built-in</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-all">
									<div className="text-blue-500 mb-4">
										<ArrowUp className="h-8 w-8" />
									</div>
									<h3 className="text-xl font-semibold mb-4">Rising Dev Costs</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										The average developer salary hit $150k in 2024. Save months of development time and launch before your runway runs out.
									</p>
									<div className="pt-4 border-t border-gray-100 dark:border-gray-700">
										<div className="text-sm font-medium mb-2">Your Savings:</div>
										<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>4-6 Months Dev Time</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>$50k+ in Development</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Faster Time to Market</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-all">
									<div className="text-green-500 mb-4">
										<StarFilledIcon className="h-8 w-8" />
									</div>
									<h3 className="text-xl font-semibold mb-4">Launch Price</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										Get lifetime access at our special launch price. After launch, prices will increase to match market rates.
									</p>
									<div className="pt-4 border-t border-gray-100 dark:border-gray-700">
										<div className="text-sm font-medium mb-2">Limited Time:</div>
										<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>40% Launch Discount</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Only 7 Spots Left</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Lifetime Updates</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="text-center mb-12">
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
									<StarFilledIcon className="h-4 w-4" />
									<span>Recent Success Stories</span>
								</div>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
									<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-all">
										<div className="font-medium mb-2">TaskFlow AI</div>
										<div className="text-sm text-gray-600 dark:text-gray-300 mb-4">Launched in 5 days</div>
										<div className="text-2xl font-bold text-primary">$21k MRR</div>
									</div>
									<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-all">
										<div className="font-medium mb-2">DevKits Pro</div>
										<div className="text-sm text-gray-600 dark:text-gray-300 mb-4">Series A Funded</div>
										<div className="text-2xl font-bold text-primary">$2.1M</div>
									</div>
									<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-all">
										<div className="font-medium mb-2">SaaSify</div>
										<div className="text-sm text-gray-600 dark:text-gray-300 mb-4">2 Weeks to MVP</div>
										<div className="text-2xl font-bold text-primary">15k Users</div>
									</div>
									<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-all">
										<div className="font-medium mb-2">BuildSpace</div>
										<div className="text-sm text-gray-600 dark:text-gray-300 mb-4">3 Days to Launch</div>
										<div className="text-2xl font-bold text-primary">98% Less Code</div>
									</div>
								</div>
							</div>
							<div className="text-center">
								<div className="max-w-2xl mx-auto mb-8">
									<div className="space-y-4">
										<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
											<StarFilledIcon className="h-4 w-4" />
											<span className="text-sm font-medium">Special Launch Pricing - Save 40%</span>
										</div>
										<Countdown targetDate={LAUNCH_END_DATE} variant="default" className="justify-center" />
									</div>
									<p className="text-sm text-gray-500 mt-4">
										Join these successful founders and launch your product in days, not months.
										Lock in our special launch pricing before it's gone.
									</p>
								</div>
								<div className="flex justify-center gap-4">
									<Link
										href={routes.docs}
										className={buttonVariants({ variant: "default", size: "lg" })}
									>
										Start Building Now
									</Link>
									<Link
										href={routes.docs}
										className={buttonVariants({ variant: "outline", size: "lg" })}
									>
										Compare All Features →
									</Link>
								</div>
							</div>
						</div>
					</Section>

					<Section>
						<SectionHeader>Choose Your Launch Plan</SectionHeader>
						<div className="max-w-4xl mx-auto text-center">
							<p className="text-lg mb-6">
								Start with everything you need, upgrade as you grow. All plans include our core features and expert support.
							</p>
							<div className="space-y-4">
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
									<Star className="h-4 w-4" />
									<span className="text-sm font-medium">Special Launch Pricing - Save 40%</span>
								</div>
								<Countdown targetDate={LAUNCH_END_DATE} variant="default" className="justify-center" />
							</div>
						</div>
						<PricingSectionSingle />
						<div className="mt-6 text-center">
							<div className="mb-8">
								<p className="text-sm font-medium text-primary mb-2">Limited Time Launch Offer</p>
								<p className="text-sm text-gray-500">Only 7 spots remaining at this price</p>
							</div>
							<p className="text-sm text-gray-500 mb-4">
								All plans include: Next.js 15, TypeScript, Authentication, Database, UI Components, and more
							</p>
							<div className="flex items-center justify-center gap-8">
								<div className="flex items-center gap-2">
									<Shield className="h-4 w-4 text-green-500" />
									<span className="text-sm">Secure Payment</span>
								</div>
								<div className="flex items-center gap-2">
									<RefreshCw className="h-4 w-4 text-green-500" />
									<span className="text-sm">30-Day Refund</span>
								</div>
								<div className="flex items-center gap-2">
									<Timer className="h-4 w-4 text-green-500" />
									<span className="text-sm">Instant Access</span>
								</div>
							</div>
						</div>
					</Section>

					<Section className="max-w-3xl">
						<SectionTitle>Common Questions</SectionTitle>
						<SectionHeader>Everything You Need to Know</SectionHeader>
						<SectionCopy>
							Can't find what you're looking for? Reach out on{" "}
							<Link href={routes.external.email}>email</Link> or{" "}
							<Link href={routes.external.x_follow}>Twitter</Link>
						</SectionCopy>
						<SectionContent>
							<FAQ />
						</SectionContent>
						<SectionCopy className="text-sm text-gray-500">
							Have a special requirement?{" "}
							<Link
								href={routes.external.email}
								className={buttonVariants({ variant: "link", size: "sm" })}
							>
								Let's chat →
							</Link>
						</SectionCopy>
					</Section>

					<Section>
						<SectionHeader>
							<AnimatedGradientText className="bg-purple">AI-First Development</AnimatedGradientText>
						</SectionHeader>
						<SectionContent>
							<div className="max-w-4xl mx-auto text-center mb-12">
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
									<StarFilledIcon className="h-4 w-4" />
									<span>Built-in AI Features</span>
								</div>
								<p className="text-lg mb-8">
									Don't just integrate AI - make it your competitive advantage. Launch with production-ready AI features that your users will love.
								</p>
								<AIDemo />
							</div>
						</SectionContent>
					</Section>

					<Section>
						<SectionHeader>Built With Modern Tech</SectionHeader>
						<div className="max-w-2xl mx-auto text-center">
							<SectionCopy>
								A cutting-edge stack that scales from MVP to IPO.
							</SectionCopy>
							<p className="text-gray-600 dark:text-gray-300">
								Every component is chosen for performance, reliability, and developer experience.
								No more decision fatigue - just proven tools that work.
							</p>
						</div>
						<SectionContent>
							<div className="mx-auto flex flex-col items-center gap-8">
								<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full">
									<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-all">
										<div className="flex items-center gap-4 mb-4">
											<div className="h-10 w-10">
												<Icons.next />
											</div>
											<div>
												<h3 className="font-medium">Frontend</h3>
												<p className="text-sm text-gray-600 dark:text-gray-300">Next.js 15</p>
											</div>
										</div>
										<ul className="space-y-2 text-sm">
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>React Server Components</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Edge Runtime</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Streaming SSR</span>
											</li>
										</ul>
									</div>
									<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-all">
										<div className="flex items-center gap-4 mb-4">
											<div className="h-10 w-10">
												<DatabaseIcon />
											</div>
											<div>
												<h3 className="font-medium">Database</h3>
												<p className="text-sm text-gray-600 dark:text-gray-300">PostgreSQL</p>
											</div>
										</div>
										<ul className="space-y-2 text-sm">
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Type-Safe ORM</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Auto Backups</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Migrations</span>
											</li>
										</ul>
									</div>
									<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-all">
										<div className="flex items-center gap-4 mb-4">
											<div className="h-10 w-10">
												<LockKeyholeIcon />
											</div>
											<div>
												<h3 className="font-medium">Authentication</h3>
												<p className="text-sm text-gray-600 dark:text-gray-300">Auth.js v5</p>
											</div>
										</div>
										<ul className="space-y-2 text-sm">
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Multi-Provider</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>JWT + Sessions</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Role-Based Access</span>
											</li>
										</ul>
									</div>
									<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-all">
										<div className="flex items-center gap-4 mb-4">
											<div className="h-10 w-10">
												<IconBrandOpenai />
											</div>
											<div>
												<h3 className="font-medium">AI/ML</h3>
												<p className="text-sm text-gray-600 dark:text-gray-300">OpenAI</p>
											</div>
										</div>
										<ul className="space-y-2 text-sm">
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>GPT-4 Integration</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Custom GPTs</span>
											</li>
											<li className="flex items-center gap-2">
												<span className="text-green-500">✓</span>
												<span>Cost Analytics</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-2xl w-full">
									<div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
										<Icons.shadcn className="h-6 w-6 mx-auto my-sm" />
										<div className="font-medium">UI Components</div>
										<div className="text-sm text-gray-600 dark:text-gray-300">Shadcn/UI</div>
									</div>
									<div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
										<Icons.tailwind className="h-6 w-6 mx-auto my-sm" />
										<div className="font-medium">Styling</div>
										<div className="text-sm text-gray-600 dark:text-gray-300">Tailwind CSS</div>
									</div>
									<div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
										<Icons.typescript className="h-6 w-6 mx-auto my-sm" />
										<div className="font-medium">Type Safety</div>
										<div className="text-sm text-gray-600 dark:text-gray-300">TypeScript</div>
									</div>
									<div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
										<div className="flex items-center gap-2 flex-wrap mx-auto">
											<Icons.npm className="h-6 w-6 my-sm" />
											<Icons.pnpm className="h-6 w-6 my-sm" />
											<Icons.yarn className="h-6 w-6 my-sm" />
										</div>
										<div className="flex items-center gap-2 flex-wrap mx-auto">
											<Icons.bun className="h-6 w-6 my-sm" />
											<IconBrandDeno className="h-6 w-6 my-sm" />
										</div>
									</div>
								</div>
								<div className="flex justify-center gap-4">
									<Link
										href={routes.docs}
										className={buttonVariants({ variant: "default", size: "lg" })}
									>
										View Tech Stack
									</Link>
									<Link
										href={routes.docs}
										className={buttonVariants({ variant: "outline", size: "lg" })}
									>
										Read Documentation →
									</Link>
								</div>
							</div>
						</SectionContent>
					</Section>

					<Section>
						<SectionHeader>
							Join <NumberTicker value={150} />+ Successful Launches
						</SectionHeader>
						<SectionContent>
							<div className="max-w-3xl mx-auto text-center mb-8">
								<p className="text-lg mb-4">
									From indie hackers to funded startups, ShipKit powers the next generation of web apps.
								</p>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
									<div className="p-4">
										<div className="text-3xl font-bold mb-2">3-6x</div>
										<div className="text-sm text-gray-600 dark:text-gray-300">Faster Development</div>
									</div>
									<div className="p-4">
										<div className="text-3xl font-bold mb-2">$50k+</div>
										<div className="text-sm text-gray-600 dark:text-gray-300">Average Savings</div>
									</div>
									<div className="p-4">
										<div className="text-3xl font-bold mb-2">24/7</div>
										<div className="text-sm text-gray-600 dark:text-gray-300">Expert Support</div>
									</div>
								</div>
							</div>
							<SocialMarquee />
						</SectionContent>
					</Section>

					<Section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
						<SectionHeader>
							Compare AI Features
						</SectionHeader>
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-12">
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
									<Star className="h-4 w-4" />
									<span>Feature Comparison</span>
								</div>
								<p className="text-lg text-gray-600 dark:text-gray-300">
									See how ShipKit's AI features compare to building from scratch
								</p>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
								<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm relative">
									<div className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
										With ShipKit
									</div>
									<ul className="space-y-4 mt-4">
										<li className="flex items-center gap-2 text-sm">
											<span className="text-green-500">✓</span>
											<span>Production-ready in minutes</span>
										</li>
										<li className="flex items-center gap-2 text-sm">
											<span className="text-green-500">✓</span>
											<span>Enterprise-grade security</span>
										</li>
										<li className="flex items-center gap-2 text-sm">
											<span className="text-green-500">✓</span>
											<span>Automatic error handling</span>
										</li>
										<li className="flex items-center gap-2 text-sm">
											<span className="text-green-500">✓</span>
											<span>Cost optimization built-in</span>
										</li>
										<li className="flex items-center gap-2 text-sm">
											<span className="text-green-500">✓</span>
											<span>Real-time analytics</span>
										</li>
									</ul>
								</div>
								<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm relative">
									<div className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium">
										Building from Scratch
									</div>
									<ul className="space-y-4 mt-4">
										<li className="flex items-center gap-2 text-sm">
											<span className="text-red-500">×</span>
											<span>3-6 months development time</span>
										</li>
										<li className="flex items-center gap-2 text-sm">
											<span className="text-red-500">×</span>
											<span>Security vulnerabilities risk</span>
										</li>
										<li className="flex items-center gap-2 text-sm">
											<span className="text-red-500">×</span>
											<span>Complex error scenarios</span>
										</li>
										<li className="flex items-center gap-2 text-sm">
											<span className="text-red-500">×</span>
											<span>Unexpected AI costs</span>
										</li>
										<li className="flex items-center gap-2 text-sm">
											<span className="text-red-500">×</span>
											<span>Manual monitoring needed</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</Section>

					<Section>
						<SectionHeader>
							Calculate Your ROI
						</SectionHeader>
						<SectionContent>
							<div className="max-w-4xl mx-auto">
								<div className="text-center mb-8">
									<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
										<Calculator className="h-4 w-4" />
										<span>ROI Calculator</span>
									</div>
									<p className="text-lg text-gray-600 dark:text-gray-300">
										See exactly how much time and money you'll save with ShipKit
									</p>
								</div>
								<ROICalculator />
							</div>
						</SectionContent>
					</Section>

					<Section>
						<SectionHeader>
							Feature Comparison
						</SectionHeader>
						<SectionContent>
							<div className="max-w-5xl mx-auto">
								<div className="text-center mb-8">
									<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
										<Star className="h-4 w-4" />
										<span>Compare Solutions</span>
									</div>
									<p className="text-lg text-gray-600 dark:text-gray-300">
										See how ShipKit stacks up against other options
									</p>
								</div>
								<ComparisonTable />
								<div className="mt-8 text-center">
									<p className="text-sm text-gray-500 mb-4">
										Don't waste months reinventing the wheel. Get a production-ready stack today.
									</p>
									<div className="flex justify-center gap-4">
										<Link
											href={routes.docs}
											className={buttonVariants({ variant: "default", size: "lg" })}
										>
											Start Building Now
										</Link>
										<Link
											href={routes.docs}
											className={buttonVariants({ variant: "outline", size: "lg" })}
										>
											Compare All Features →
										</Link>
									</div>
								</div>
							</div>
						</SectionContent>
					</Section>

					<SocialDock className="fixed bottom-12 left-0 right-0 z-50" />

					{process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" && (
						<>

							<h2 className="mb-8 text-center text-3xl font-bold">
								DEVELOPMENT DEMO
							</h2>


							<div className="mt-12 w-full max-w-6xl mx-auto px-6">
								<BlurFade delay={3} duration={1} inView>
									<HeroDemo />
								</BlurFade>
							</div>



							<Section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
								<SectionHeader>
									Trusted By Industry Leaders
								</SectionHeader>
								<div className="max-w-4xl mx-auto">
									<div className="text-center mb-12">
										<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
											<Star className="h-4 w-4" />
											<span>Not Backed by Y Combinator</span>
										</div>
										<p className="text-lg text-gray-600 dark:text-gray-300">
											Join the founders who turned their ideas into successful products in record time
										</p>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
										<div className="p-8 rounded-lg bg-white dark:bg-gray-800 shadow-sm relative group hover:shadow-md transition-shadow">
											<div className="absolute top-4 right-4">
												<div className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
													YC W23
												</div>
											</div>
											<div className="flex items-start gap-4 mb-6">
												<div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700" />
												<div>
													<h3 className="font-semibold">Sarah Chen</h3>
													<p className="text-sm text-gray-600 dark:text-gray-300">CTO at RocketAI</p>
												</div>
											</div>
											<blockquote className="text-lg mb-4">
												"ShipKit saved us 4 months of development time. The AI features alone would have taken us months to build properly. We closed our seed round 2 weeks after launch."
											</blockquote>
											<div className="flex items-center gap-2">
												<StarFilledIcon className="h-4 w-4 text-yellow-400" />
												<StarFilledIcon className="h-4 w-4 text-yellow-400" />
												<StarFilledIcon className="h-4 w-4 text-yellow-400" />
												<StarFilledIcon className="h-4 w-4 text-yellow-400" />
												<StarFilledIcon className="h-4 w-4 text-yellow-400" />
											</div>
											<div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
												<div className="text-sm text-gray-600 dark:text-gray-300">
													Results with ShipKit:
												</div>
												<div className="mt-2 flex items-center gap-4 text-sm">
													<div>
														<div className="font-medium">$2.1M</div>
														<div className="text-gray-600 dark:text-gray-300">Seed Round</div>
													</div>
													<div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
													<div>
														<div className="font-medium">4 Months</div>
														<div className="text-gray-600 dark:text-gray-300">Saved</div>
													</div>
													<div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
													<div>
														<div className="font-medium">10,000+</div>
														<div className="text-gray-600 dark:text-gray-300">Users</div>
													</div>
												</div>
											</div>
										</div>
										<div className="p-8 rounded-lg bg-white dark:bg-gray-800 shadow-sm relative group hover:shadow-md transition-shadow">
											<div className="absolute top-4 right-4">
												<div className="px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium">
													Verified
												</div>
											</div>
											<div className="flex items-start gap-4 mb-6">
												<div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700" />
												<div>
													<h3 className="font-semibold">Michael Torres</h3>
													<p className="text-sm text-gray-600 dark:text-gray-300">Founder, DataFlow</p>
												</div>
											</div>
											<blockquote className="text-lg mb-4">
												"We went from idea to paying customers in 3 weeks. The authentication and payment systems worked flawlessly from day one. Best investment we've made."
											</blockquote>
											<div className="flex items-center gap-2">
												<StarFilledIcon className="h-4 w-4 text-yellow-400" />
												<StarFilledIcon className="h-4 w-4 text-yellow-400" />
												<StarFilledIcon className="h-4 w-4 text-yellow-400" />
												<StarFilledIcon className="h-4 w-4 text-yellow-400" />
												<StarFilledIcon className="h-4 w-4 text-yellow-400" />
											</div>
											<div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
												<div className="text-sm text-gray-600 dark:text-gray-300">
													Results with ShipKit:
												</div>
												<div className="mt-2 flex items-center gap-4 text-sm">
													<div>
														<div className="font-medium">3 Weeks</div>
														<div className="text-gray-600 dark:text-gray-300">to Launch</div>
													</div>
													<div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
													<div>
														<div className="font-medium">$21k</div>
														<div className="text-gray-600 dark:text-gray-300">MRR</div>
													</div>
													<div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
													<div>
														<div className="font-medium">98%</div>
														<div className="text-gray-600 dark:text-gray-300">Less Code</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
										<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-shadow">
											<div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$12M+</div>
											<div className="text-gray-600 dark:text-gray-300">Raised by customers</div>
										</div>
										<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-shadow">
											<div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">150+</div>
											<div className="text-gray-600 dark:text-gray-300">Active products</div>
										</div>
										<div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm group hover:shadow-md transition-shadow">
											<div className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">4.9/5</div>
											<div className="text-gray-600 dark:text-gray-300">Average rating</div>
										</div>
									</div>
									<div className="mt-12 text-center">
										<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
											<Star className="h-4 w-4" />
											<span className="text-sm font-medium">Join Our Success Stories</span>
										</div>
										<div className="flex justify-center gap-4">
											<Link
												href={routes.docs}
												className={buttonVariants({ variant: "default", size: "lg" })}
											>
												Start Building Now
											</Link>
											<Link
												href={routes.docs}
												className={buttonVariants({ variant: "outline", size: "lg" })}
											>
												Read More Stories →
											</Link>
										</div>
									</div>
								</div>
							</Section>

							<Section>
								<SectionTitle>AI Workflows</SectionTitle>
								<SectionHeader>Supercharged AI tools</SectionHeader>
								<SectionCopy>
									We ❤️ v0. <br />
									{siteConfig.name} includes a suite of AI tools to help you build
									your product faster.
									<br />
									<Link href="#" className={buttonVariants({ variant: "link" })}>
										See it in action
									</Link>
								</SectionCopy>
							</Section>

							<Section>
								<SectionHeader>
									Built by a solopreneur with{" "}
									<span className="font-bold underline">Hustle</span>
								</SectionHeader>
								<SectionCopy>
									A lifelong web developer with a
									<span className="font-bold underline">passion</span>
									for clean, performant, and maintainable code.
								</SectionCopy>
							</Section>

							<Section>Tabs: designers, developers, founders</Section>

							<Section>
								<SectionTitle>Showcase</SectionTitle>
								<SectionHeader>We can't wait to see what you build</SectionHeader>
								<ExampleMasonry />
							</Section>

							<Section>
								<FeaturesTimed />
							</Section>

							<Section>
								<SimpleFeaturesCards />
							</Section>

							<Section>
								<SectionHeader>Made with you in mind</SectionHeader>
								<SectionCopy>
									{siteConfig.name} isn't just for Developers.
									<br />
									We include tools for Marketers, Designers, and Founders. Export
									Figma directly into React components, drag-and-drop code using
									Builder, and manage your documentation with Markdown.
								</SectionCopy>
								<SectionContent>
									<FeaturesGrid />
								</SectionContent>
							</Section>

							<div className="mx-auto h-[30rem] w-[calc(100%-4rem)] overflow-hidden rounded-md">
								<Vortex
									backgroundColor="black"
									className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10"
								>
									<h2 className="text-center text-2xl font-bold text-white md:text-6xl">
										The hell is this?
									</h2>
									<p className="mt-6 max-w-xl text-center text-sm text-white md:text-2xl">
										This is chemical burn. It&apos;ll hurt more than you&apos;ve
										ever been burned and you&apos;ll have a scar.
									</p>
									<div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
										<button type="button" className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-blue-700">
											Order now
										</button>
										<button type="button" className="px-4 py-2 text-white">
											Watch trailer
										</button>
									</div>
								</Vortex>
							</div>

							<Spotlight />

							<div className="mt-4 flex flex-col items-center justify-center gap-2">
								<p className="text-sm text-muted-foreground">Downloads</p>
								<AnimatedCounter />
							</div>

						</>
					)}
				</Suspense>

			</div>
		</>
	);
}
