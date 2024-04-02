"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function Authority() {
	const [token, setToken] = React.useState("");

	const handleRevoke = () => {
		// TODO: Revoke authority
	};

	return (
		<div className="max-w-lg w-full rounded-none md:rounded-2xl p-4 md:p-8 bg-white dark:bg-black mx-auto relative z-10 overflow-hidden border border-gray-800 shadow-xl">
			<h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 dark:border-white/[0.2]">
				Revoke Mint Authority
			</h2>
			<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
				Revoking mint authority ensures that there can be no more tokens minted than the total supply. This provides security and peace of mind to buyers. The cost is 0.1 SOL
			</p>

			<form className="my-8">
				<LabelInputContainer className="mb-4">
					<Label htmlFor="token">Select Token</Label>
					<Input
						id="token"
						placeholder="6"
						type="text"
						value={token}
						onChange={(e) => setToken(e.target.value)}
					/>
				</LabelInputContainer>

				<button
					className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] rounded-full py-3 mt-10"
					onClick={handleRevoke}
				>
					Revoke Authority
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
