settings.json に `editor.formantOnSave` などを設定しても保存時の自動フォーマットが実行されず、2時間溶かしたのでメモ。

---

VSCode の出力タブを見ろ！エラーログが出ていて自動フォーマットが動作しなくなっていた。

今回の場合は import の sort 設定がエラーになっていた。

https://github.com/IanVS/prettier-plugin-sort-imports/issues/132
