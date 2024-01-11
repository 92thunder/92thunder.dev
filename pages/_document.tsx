import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";
import { GA_ID } from "../libs/gtag";

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
      {GA_ID && (
      <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
        `,
                }}
              />
      </>
      )}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
	)
}

export default Document
