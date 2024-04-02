"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function TokenLauncher() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted");
	};

	return (
		<div className="max-w-md w-full rounded-none md:rounded-2xl p-4 md:p-8 bg-white dark:bg-black mx-auto relative z-10 overflow-hidden border dark:border-white/[0.2]">

			<h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-100">
				Solana Token Creator
			</h2>
			<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
				The perfect tool to create Solana SPL tokens.
				Simple, user friendly, and fast.
			</p>

			<form className="my-8" onSubmit={handleSubmit}>
				<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-8">
					<LabelInputContainer>
						<Label htmlFor="name">Name</Label>
						<Input id="name" placeholder="Tyler" type="text" />
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor="lastname">Symbol</Label>
						<Input id="symbol" placeholder="Durden" type="text" maxLength={8} />
					</LabelInputContainer>
				</div>
				<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
					<div className="w-[100%]">
						<LabelInputContainer className="mb-4">
							<Label htmlFor="decimals">Decimals</Label>
							<Input id="decimals" placeholder="18" type="number" />
						</LabelInputContainer>
						<LabelInputContainer className="mb-4">
							<Label htmlFor="supply">Supply</Label>
							<Input id="supply" placeholder="100M" type="number" />
						</LabelInputContainer>
					</div>

					<LabelInputContainer>
						<Label htmlFor="tokenImage">Token Image</Label>
						<Input id="tokenImage" type="file" accept="image/*" style={{ width: '100%', height: '120px', color: "#fff" }} />
					</LabelInputContainer>
				</div>
				<LabelInputContainer className="mb-8">
					<Label htmlFor="description">Description</Label>
					<Input
						id="description"
						placeholder="Token description"
						type="description"
					/>
				</LabelInputContainer>

				<button
					className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] rounded-full py-3"
					type="submit"
				>
					Select wallet
					<BottomGradient />
				</button>
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
