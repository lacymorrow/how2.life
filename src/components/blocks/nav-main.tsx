"use client";

import { Link } from "@/components/primitives/link-with-transition";
import type { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ArrowLeftFromLineIcon, Download, Settings2, SquareTerminal, Wrench } from "lucide-react";

const data = [
	{
		title: `Download ${siteConfig.name}`,
		url: routes.download,
		icon: Download,
	},
	{
		title: "Dashboard",
		url: routes.app.dashboard,
		icon: SquareTerminal,
	},
	{
		title: "Manage",
		icon: Settings2,
		items: [
			{ title: "Projects", url: routes.app.projects },
			{ title: "Teams", url: routes.app.teams },
			{ title: "API Keys", url: routes.app.apiKeys },
		],
	},
	{
		title: "Tools",
		url: routes.app.tools,
		icon: Wrench,
	},
]

// Helper function to determine if a route is active
const isRouteActive = (currentPath: string, itemPath: string) => {
	if (itemPath === "#") return false;
	return currentPath.startsWith(itemPath);
};

export function NavMain({
	items = data,
}: {
	items?: {
		title: string;
		url?: string;
		icon?: LucideIcon;
		isActive?: boolean;
		items?: {
			title: string;
			url: string;
		}[];
	}[];
}) {
	const pathname = usePathname();

	return (
		<>
			<SidebarGroup className={cn("relative pl-0", "opacity-50 hover:opacity-100 transition-opacity")}>
				<SidebarGroupLabel className="p-0">
					<Link href={routes.home} className={cn(buttonVariants({ variant: "link", size: "sm" }), "flex items-center justify-start gap-2 w-full")}>
						<ArrowLeftFromLineIcon className="h-4 w-4" /> {siteConfig.name} Home
					</Link>
				</SidebarGroupLabel>
			</SidebarGroup >

			<SidebarGroup>
				<SidebarGroupLabel>Platform</SidebarGroupLabel>
				<SidebarMenu>
					{items.map((item) => {
						const isActive = item.url ? isRouteActive(pathname, item.url) : false;
						const hasActiveChild = item.items?.some((subItem) =>
							subItem.url ? isRouteActive(pathname, subItem.url) : false,
						);

						if (!item.items) {
							return (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										asChild
										tooltip={item.title}
										data-active={isActive}
										className={cn(
											"relative",
											"before:absolute before:left-0 before:top-1/2 before:h-8 before:w-[2px] before:-translate-y-1/2 before:rounded-l before:bg-primary before:opacity-0 before:transition-opacity",
											"data-[active=true]:bg-muted data-[active=true]:before:opacity-100",
										)}
									>
										<Link href={item?.url ?? "#"}>
											{item.icon && (
												<item.icon
													className={cn(
														"text-muted-foreground transition-colors",
														"group-hover:text-foreground",
														isActive && "text-foreground",
													)}
												/>
											)}
											<span
												className={cn(
													"text-muted-foreground transition-colors",
													"group-hover:text-foreground",
													isActive && "font-medium text-foreground",
												)}
											>
												{item.title}
											</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							);
						}

						return (
							<Collapsible
								key={item.title}
								asChild
								defaultOpen={isActive || hasActiveChild}
								className="group/collapsible"
							>
								<SidebarMenuItem className="p-0">
									<CollapsibleTrigger asChild>
										<SidebarMenuButton
											tooltip={item.title}
											data-active={isActive || hasActiveChild}
											asChild
										>
											<Link href={item?.url ?? "#"}>
												{item.icon && (
													<item.icon
														className={cn(
															"text-muted-foreground transition-colors",
															"group-hover:text-foreground",
															(isActive || hasActiveChild) && "text-foreground",
														)}
													/>
												)}
												<span
													className={cn(
														"text-muted-foreground transition-colors",
														"group-hover:text-foreground",
														(isActive || hasActiveChild) &&
														"font-medium text-foreground",
													)}
												>
													{item.title}
												</span>
												<div className="ml-auto shrink-0 rounded-md p-1 hover:bg-muted-foreground/20">
													<ChevronRightIcon className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
												</div>
											</Link>
										</SidebarMenuButton>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub className="pr-0 mr-0">
											{item.items?.map((subItem) => {
												const isSubItemActive = isRouteActive(
													pathname,
													subItem.url,
												);
												return (
													<SidebarMenuSubItem key={subItem.title}>
														<SidebarMenuSubButton
															asChild
															data-active={isSubItemActive}
															className={cn(
																"relative",
																"before:absolute before:left-0 before:top-1/2 before:h-8 before:w-[2px] before:-translate-y-1/2 before:rounded-l before:bg-primary before:opacity-0 before:transition-opacity",
																"data-[active=true]:bg-muted data-[active=true]:before:opacity-100",
															)}
														>
															<Link href={subItem.url} className="w-full">
																<span
																	className={cn(
																		"text-muted-foreground transition-colors",
																		"group-hover:text-foreground",
																		isSubItemActive &&
																		"font-medium text-foreground",
																	)}
																>
																	{subItem.title}
																</span>
															</Link>
														</SidebarMenuSubButton>
													</SidebarMenuSubItem>
												);
											})}
										</SidebarMenuSub>
									</CollapsibleContent>
								</SidebarMenuItem>
							</Collapsible>
						);
					})}
				</SidebarMenu>
			</SidebarGroup>
		</>
	);
}
