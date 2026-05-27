---
title: "VSCode拡張でClaude Codeのautoモードを有効にする"
publishedAt: "2026-05-27"
---

Claude CodeのVSCode拡張でautoモードが使えなかったので、有効にする方法を調べた。

---

## autoモードとは

autoモードはClaude Codeのパーミッションモードの一つ。通常、Claudeがファイルを編集したりコマンドを実行するたびに承認プロンプトが表示されるが、autoモードでは分類器モデルがバックグラウンドでアクションの安全性を判断し、問題なければプロンプトなしで実行してくれる。

長時間のタスクを任せたいときに便利。

## 要件

autoモードを使うには以下の条件を満たす必要がある。

- **プラン**: Pro以上（全プラン対応）
- **モデル**: Claude Sonnet 4.6、Opus 4.6、Opus 4.7（古いモデルは非対応）
- **プロバイダー**: Anthropic APIのみ（Bedrock・Vertex・Foundryは非対応）
- **Team/Enterpriseの場合**: 管理者による有効化が必要

## VSCode拡張での有効化手順

### ~/.claude/settings.json でデフォルトモードを設定する

`~/.claude/settings.json` に設定する。

```json
{
  "permissions": {
    "defaultMode": "auto"
  }
}
```

**注意**: `.claude/settings.json`（プロジェクトローカル）や `.claude/settings.local.json` に書いても無視される。必ず `~/.claude/settings.json`（ユーザーグローバル）に書くこと。

参照: [パーミッションモードを選択する - Claude Code ドキュメント](https://code.claude.com/docs/ja/permission-modes)

## まとめ

- `~/.claude/settings.json` の `permissions.defaultMode` を `"auto"` にするだけでVSCode拡張でもautoモードが使える
