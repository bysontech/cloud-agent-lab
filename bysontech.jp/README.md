# BysonTech.jp

BysonTech のコーポレートサイト。HonoX + Tailwind CSS で構築し、Cloudflare Pages でホスティングします。

## 技術スタック

- **Framework**: [HonoX](https://github.com/honojs/honox) - Hono ベースのフルスタックフレームワーク
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファースト CSS フレームワーク
- **Runtime**: Cloudflare Pages (Functions)
- **Build Tool**: Vite

## ディレクトリ構成

```
bysontech.jp/
├── app/
│   ├── routes/           # ページルート
│   │   ├── _renderer.tsx   # 共通レイアウト（header/footer/SEO）
│   │   ├── _middleware.ts  # ミドルウェア（.html リダイレクト等）
│   │   ├── _404.tsx        # 404 ページ
│   │   ├── index.tsx       # トップページ (/)
│   │   └── sharelist/
│   │       └── privacy.tsx # プライバシーポリシー (/sharelist/privacy)
│   ├── lib/
│   │   └── constants.ts    # サイト定数（i18n 対応準備）
│   ├── components/         # 共通コンポーネント
│   ├── style.css           # Tailwind CSS エントリ
│   ├── server.ts           # サーバーエントリ
│   ├── client.ts           # クライアントエントリ
│   └── global.d.ts         # 型定義
├── public/                 # 静的ファイル
│   ├── favicon.svg
│   └── robots.txt
├── wrangler.json           # Cloudflare 設定
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## ローカル開発

### 前提条件

- Node.js 18 以上
- npm

### セットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバー起動
npm run dev
```

開発サーバーが起動したら、ブラウザで http://localhost:5173 にアクセスしてください。

### 利用可能なコマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 (Vite) |
| `npm run build` | 本番用にビルド |
| `npm run preview` | ビルド結果を Wrangler でプレビュー |
| `npm run deploy` | Cloudflare Pages にデプロイ |

## Cloudflare Pages へのデプロイ

### 初回セットアップ

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) でアカウントを作成
2. Wrangler CLI でログイン:
   ```bash
   npx wrangler login
   ```

### デプロイ

```bash
# ビルド & デプロイ
npm run deploy
```

または、GitHub リポジトリを Cloudflare Pages に連携して自動デプロイを設定できます。

### GitHub 連携での自動デプロイ設定

1. Cloudflare Dashboard → Pages → Create a project
2. Connect to Git → GitHub リポジトリを選択
3. Build settings:
   - **Framework preset**: None
   - **Build command**: `cd bysontech.jp && npm install && npm run build`
   - **Build output directory**: `bysontech.jp/dist`
   - **Root directory**: `/`

### 環境変数

本番環境で必要な環境変数は Cloudflare Dashboard または `wrangler.json` で設定します。

秘密情報は以下のように管理してください:
```bash
# ローカル開発用（.dev.vars ファイルを作成）
echo "SECRET_KEY=your-secret" > .dev.vars

# 本番環境（Wrangler CLI で設定）
npx wrangler secret put SECRET_KEY
```

## URL 構成

| パス | 説明 |
|------|------|
| `/` | トップページ |
| `/sharelist/privacy` | プライバシーポリシー |

### .html リダイレクト

旧 URL（例: `/sharelist/privacy.html`）は、拡張子なしの URL に 301 リダイレクトされます。

## i18n 対応について

将来的な多言語展開に備え、すべてのテキストは `app/lib/constants.ts` に集約しています。

英語対応が必要になった場合:
1. `app/lib/constants.en.ts` を作成
2. ルーティングまたは言語検出ロジックを追加
3. 適切な定数ファイルを読み込むよう変更

## パフォーマンス最適化

- **画像**: WebP/AVIF 形式を推奨、適切なサイズに最適化
- **フォント**: Google Fonts の `display=swap` で FOIT を防止
- **CSS**: Tailwind の PurgeCSS で未使用スタイルを除去
- **JavaScript**: 最小限のクライアント JS（ナビゲーション開閉のみ）

### PageSpeed Insights 目標

- Mobile: Performance 90+
- Desktop: Performance 95+

## ライセンス

Copyright (c) 2024 BysonTech. All rights reserved.
