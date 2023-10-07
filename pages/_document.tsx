import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC = () => {
	return (
  <Html lang="ja">
    <Head>
      <link
        href="/manifest.json"
        rel="manifest"
      />
      <link
        href="/logo192.png"
        rel="apple-touch-icon"
      />
      <meta
        content="#424242"
        name="theme-color"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
	)
}

export default Document
