import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Meteors } from "@/components/ui/meteors";
import React from "react";

export default function Faq() {
	return (
		<Layout>
			<div className="w-full max-w-[1000px] mx-auto relative z-10 p-10 bg-black border rounded-2xl dark:border-white/[0.2]">
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>What is Solana Token Creator ?</AccordionTrigger>
						<AccordionContent>
							The Orion Tools Solana Token Creator is an advanced Smart Contract empowering users to effortlessly generate customized SPL Tokens (Solana tokens), specifically tailored to their preferences in terms of supply, name, symbol, description, and image on the Solana Chain. Making tokens is super quick and cheap with our easy process.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Is it safe to create Solana Token here?</AccordionTrigger>
						<AccordionContent>
							Yes, our tools is completely safe. It is a dApp that creates your token, giving you and only you the mint and freeze Authority (the control of a SPL Token). Our dApp is audited and used by hundred of users every month.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>How much time will the Solana Token Creator Take?</AccordionTrigger>
						<AccordionContent>
							The time of your Token Creation depends on the TPS Status of Solana. It usually takes just a few seconds so do not worry. If you have any issue please contact us
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger>How much does it cost ?</AccordionTrigger>
						<AccordionContent>
							The token creation currently cost 0.5 Sol, it includes all fees necessaries for the Token Creation in Solana mainnet.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5">
						<AccordionTrigger>Which wallet can i use?</AccordionTrigger>
						<AccordionContent>
							You can use any Solana Wallet as Phantom, Solflare, Backpack, etc.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</Layout>
	);
}
