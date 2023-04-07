import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC = () => {
	return (
		<Html lang="ja">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/logo192.png" />
				<meta name="theme-color" content="#424242" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document