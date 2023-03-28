type PostInfo= {
  id: string
  title: string
  mdFilename: string
  publishedAt: string
}

export const postsInfo: PostInfo[] = [
	{
		id: "codeowners",
		title: "モノレポを支える技術 - CODEOWNERS",
		mdFilename: "2023-03-28.md",
		publishedAt: "2023-03-29 02:00:00"
	},
	// {
	// 	id: "power-facilitation",
	// 	title: "エンジニアも読んで欲しい！ファシリテーション本！",
	// 	mdFilename: "2023-02-06.md",
	// 	publishedAt: "2023-02-06 01:00:00"
	// },
	{
		id: "eslint-plugin-query",
		title: "ESLint Plugin Query",
		mdFilename: "2023-01-09.md",
		publishedAt: "2023-01-09 01:00:00"
	},
	{
		id: "8e3e28ed-2b71-4900-a6eb-838e2c48fec2",
		title: "2022年の抱負",
		mdFilename: "2022-01-15.md",
		publishedAt: "2022-01-15 20:12:00"
	},
	{
		id: "e276c394-ea27-4686-8d8f-0cf82dd1bea0",
		title: "本ブログのバックエンドをGo + MySQLで作った",
		mdFilename: "2022-01-11.md",
		publishedAt: "2022-01-11 07:40:00"
	},
	{
		id: "8b00a36d-4085-4be6-b028-974a4e69bfbc",
		title: "本ブログをReact SPAからNext.jsにリプレイスした",
		mdFilename: "2022-01-09.md",
		publishedAt: "2022-01-09 19:35:00"
	},
	{
		id: "eecb02a5-871c-48ff-acb0-844b9d52d6c5",
		title: "本ブログをVPSに引っ越しする",
		mdFilename: "2021-11-28.md",
		publishedAt: "2021-11-28 15:00:00"
	},
	{
		id: "e93055db-57d0-4072-ae28-220f5200df6a",
		title: "ISUCON10予選の過去問練習-2 App-DBを別インスタンスに",
		mdFilename: "2021-07-30.md",
		publishedAt: "2021-07-30 15:00:00"
	},
	{
		id: "ffc4d259-7746-4fa7-b15b-a2bf221dfccd",
		title: "ISUCON10予選の過去問練習-1 AWSで環境構築",
		mdFilename: "2021-07-24.md",
		publishedAt: "2021-07-24 15:00:00"
	},
	{
		id: "f62bdd28-27ec-48b7-8a7c-9d66efb1ac81",
		title: "firebase storage で ファイルをパブリックアクセス可能にする",
		mdFilename: "2021-04-08.md",
		publishedAt: "2021-04-08 15:00:00"
	},
	{
		id: "05fedd45-c26b-488a-a7dd-59f0368ca256",
		title: "firestore で特定ユーザのみ書き込み可能にする",
		mdFilename: "2021-04-02.md",
		publishedAt: "2021-04-02 15:00:00"
	},
	{
		id: "94cb03ba-0d06-4c08-b6af-e99b099616f4",
		title: "WSLでsystemctlが使えない",
		mdFilename: "2020-09-11.md",
		publishedAt: "2020-09-11 15:00:00"
	},
	{
		id: "cfc0f11b-1a12-4f1a-8a64-44e699868e69",
		title: "React & TypeScriptのサンプルコードをどこに書くか",
		mdFilename: "2020-08-29.md",
		publishedAt: "2020-08-29 15:00:00"
	},
	{
		id: "21db64c4-9fb7-41c2-a081-cbdbac7323eb",
		title: "Notion Blogで There are no posts yet になる",
		mdFilename: "2020-08-15.md",
		publishedAt: "2020-08-15 15:00:00"
	},
	{
		id: "cb6168e7-86a3-4c43-a257-594a89681e95",
		title: "[React] useContextの使い方",
		mdFilename: "2020-08-01.md",
		publishedAt: "2020-08-01 15:00:00"
	},
	{
		id: "e67a0680-56f1-46ae-b33a-2a3b74ad0e5a",
		title: "スタートアップに転職して2年が経った",
		mdFilename: "2020-07-19.md",
		publishedAt: "2020-07-19 06:00:00"
	},
	{
		id: "ed3d508c-a7cb-4e52-8a0c-2d80f85f83e8",
		title: "Nxについて調べてみた",
		mdFilename: "2020-07-11.md",
		publishedAt: "2020-07-11 15:00:00"
	},
	{
		id: "2c597b8e-52e1-46e3-a069-27ec5dfb3c01",
		title: "Notion Blogが途中までしか表示されない",
		mdFilename: "2020-06-06.md",
		publishedAt: "2020-06-06 15:00:00"
	},
	{
		id: "c056ba5c-f5ca-47e5-8c58-c0cd6e62de14",
		title: "ざっくりわかるドメイン駆動設計",
		mdFilename: "2020-05-30.md",
		publishedAt: "2020-05-30 06:00:00"
	},
	{
		id: "2fde3d99-26d5-4a2c-bb09-724e5576adc8",
		title: "Notion Blogを使った感想",
		mdFilename: "2020-02-01.md",
		publishedAt: "2020-02-01 15:00:00"
	},
	{
		id: "518cd3a1-f4ee-4c2d-8df8-e744a0981bc1",
		title: "slackにyoutubeのチャンネル登録者数やtwitterのフォロワー数を通知する",
		mdFilename: "2019-02-10.md",
		publishedAt: "2019-02-10 06:00:00"
	},
	{
		id: "867101b0-2900-47d5-a7fb-0a0bbc12d14d",
		title: "Chrome拡張とFirebaseで作るチャットアプリ",
		mdFilename: "2018-08-24.md",
		publishedAt: "2018-08-24 15:00:00"
	},
	{
		id: "b7c37d0d-6174-4f41-a59f-dde09a83c96f",
		title: "ホバーしたエレメントにハイライトを当てる",
		mdFilename: "2018-06-10.md",
		publishedAt: "2018-06-10 15:00:00"
	},
	{
		id: "f6ac958c-51b1-4ce9-b023-3f112135bbaa",
		title: "スタートアップに転職した",
		mdFilename: "2018-05-16.md",
		publishedAt: "2018-05-16 15:00:00"
	},
	{
		id: "6364f3b8-44f6-405f-9a8d-aa44feeebfb0",
		title: "electron-vueでメモ帳アプリを作ってみた",
		mdFilename: "2017-12-10.md",
		publishedAt: "2017-12-10 15:00:00"
	},
	{
		id: "d0244ede-c126-4fa8-b7dc-86baaa78b35e",
		title: "Node.jsでGoogle Analytics APIを使って楽にアクセスランキングを作る",
		mdFilename: "2017-11-22.md",
		publishedAt: "2017-11-22 06:00:00"
	},
	{
		id: "96ec6cf4-d4db-41b6-a2ce-97a1a0a75d5c",
		title: "Vue.jsのカスタムコンポーネントでradioボタンを使う",
		mdFilename: "2017-10-14.md",
		publishedAt: "2017-10-14 06:00:00"
	},
	{
		id: "3f9d8dd4-9df3-4f37-82ed-3a2a9d62f9ce",
		title: "Vue.jsでDrag＆Dropを試す",
		mdFilename: "2017-09-24.md",
		publishedAt: "2017-09-24 06:00:00"
	},
	{
		id: "375a8633-1e0d-4bfb-824a-6876d4f8685a",
		title: "GinでTwitter OAuthでaccess token取得",
		mdFilename: "2017-09-10.md",
		publishedAt: "2017-09-10 15:00:00"
	},
	{
		id: "abbbf61d-83ac-41a1-9815-d6ff22438c24",
		title: "go-twitterを使ってツイートしてみる",
		mdFilename: "2017-09-03.md",
		publishedAt: "2017-09-03 06:00:00"
	},
	{
		id: "4f9937fd-a056-4f4c-93ec-6545c1a8e8a6",
		title: "転職怖い",
		mdFilename: "2017-08-23.md",
		publishedAt: "2017-08-23 21:00:00"
	}
]