"use client";
import React from "react";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";
import { WalletConnect } from "./WalletConnect";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function Nav() {
	const navItems = [
		{
			name: "Token",
			link: "/",
			icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
		},
		{
			name: "Liquidity",
			link: "/liquidity",
			icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
		},
		{
			name: "Authority",
			link: "/authority",
			icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
		},
		{
			name: "About",
			link: "/about",
			icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
		},
		{
			name: "Faq",
			link: "/faq",
			icon: (
				<IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
			),
		},
	];
	return (
		<div className="h-[100px] max-w-[1300px] mx-auto flex items-center justify-between p-5 absolute top-0 left-0 w-full right-0 z-10">
			<div className="w-1/2">
				{/* <img src="/logo.svg" alt="logo" className="w-10 h-10" /> */}
				<span className="text-2xl font-bold">
					Bounce Bunnz
				</span>
			</div>

			<div className="w-1/2">
				<FloatingNav navItems={navItems} />
				{/* <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" /> */}
			</div>

			<div className="w-1/2 flex justify-end">
				<WalletMultiButton
					style={{
						backgroundColor: "black",
						border: "1px solid rgb(255 255 255 / 0.2)",
						borderRadius: 50,
					}}
				/>
			</div>
		</div>
	);
}