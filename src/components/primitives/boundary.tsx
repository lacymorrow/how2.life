import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type * as React from "react";

export const Boundary = ({
	children,
	className,
	title,
	description,
	actionText = "Try again",
	href,
	onAction,
}: {
	children?: React.ReactNode;
	className?: string;
	title: string;
	description?: string;
	actionText?: string;
	href?: string;
	onAction?: () => void;
}) => {
	return (
		<>
			<div className={cn("container flex w-full flex-1 items-center justify-center border border-dashed p-md shadow-sm", className)}>
				<div className="flex flex-col items-center gap-lg text-center">
					<h1 className="text-2xl font-bold">{title}</h1>
					{description && <p className="text-muted-foreground">{description}</p>}
					{onAction && (
						<Button type="button" className="" onClick={onAction}>
							{actionText}
						</Button>
					)}
					{href && (
						<Link href={href} className={buttonVariants()}>
							{actionText}
						</Link>
					)}

					{children}
				</div>
			</div>
		</>
	);
};
