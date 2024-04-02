import "@/styles/globals.css";
import WalletWrapper from "@/providers/WalletProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletWrapper>
      <Component {...pageProps} />
    </WalletWrapper>
  );
}
