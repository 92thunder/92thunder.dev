# 92thunder.dev

個人ブログ・ポートフォリオサイト。Astro で構築した静的サイト。

## ブログ記事を書く

記事は `src/content/blog/` に Markdown ファイルとして置く。

### フロントマター

```md
---
title: "記事タイトル"
publishedAt: "2026-06-27"
---

本文...
```

### 下書き（非公開）

フロントマターに `draft: true` を追加すると、一覧・個別ページ・フィードのすべてから除外される。

```md
---
title: "記事タイトル"
publishedAt: "2026-06-27"
draft: true
---
```

公開するときは `draft: true` を削除する。

---

## 開発

### セットアップ

```bash
npm install
```

### コマンド

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発サーバー起動（ホットリロード付き） |
| `npm run build` | 本番ビルド（`dist/` に出力） |
| `npm run preview` | ビルド結果をローカルでプレビュー |
| `npm run check` | TypeScript 型チェック |

### 主な技術スタック

- [Astro](https://astro.build/) — 静的サイトジェネレーター
- [Tailwind CSS](https://tailwindcss.com/) — スタイリング
- React — インタラクティブなコンポーネント向け

### ディレクトリ構成

```
src/
├── components/   # Astro・React コンポーネント
├── content/
│   └── blog/     # ブログ記事 (.md)
├── layouts/      # ページレイアウト
├── pages/        # ルーティング
└── styles/       # グローバル CSS
```
