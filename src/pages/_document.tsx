import { Html, Head, Main, NextScript } from "next/document";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={roboto.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
