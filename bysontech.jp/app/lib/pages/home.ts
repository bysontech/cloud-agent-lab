/**
 * Home page constants.
 * BysonTech (PoC / Architecture / DX Engineering)
 */

export const HERO = {
  title: "仮説を、最短で動く形に。",
  subtitle:
    "BysonTechは、業務課題の整理から設計・提案、PoC（試作）開発までを一気通貫で支援します。小さく試して、早く学び、次の一手につなげます。",
  cta: "相談する",
  ctaSecondary: "デモを見る",
} as const;

export const SERVICES = {
  title: "提供サービス",
  items: [
    {
      title: "PoC（試作）開発・プロトタイピング",
      description:
        "検証したい仮説を、短期間で「触れるデモ」に落とし込みます。Webアプリ / API / 軽量DB連携 / AI機能のON/OFF切替など、目的に合わせて最小構成で実装します。",
      icon: "code",
    },
    {
      title: "要件整理・設計支援（アーキテクチャ / API / データ設計）",
      description:
        "現状把握から課題の言語化、要件定義、画面・API・データ構造の設計まで対応。将来の本番化・運用を見据え、過不足のない技術選定と設計方針を提案します。",
      icon: "consulting",
    },
    {
      title: "クラウド・デプロイ支援（小規模〜）",
      description:
        "Cloudflare Pages / Workers 等を中心に、PoCを公開・共有できる環境を整備します。必要に応じて、ログ/監視の入口、基本的なセキュリティ対策、運用手順の整備まで支援します。",
      icon: "cloud",
    },
  ],
} as const;

export const ABOUT = {
  title: "BysonTechについて",
  description:
    "BysonTechは「設計できて、作れて、説明できる」ことを強みに、PoC（試作）から価値検証までを素早く回すための技術支援を提供します。大規模開発の前段にある“検証フェーズ”を最短距離で進め、意思決定の精度を上げます。",
  features: [
    "業務課題の整理 → 設計 → PoC開発まで一気通貫で対応",
    "デモをサブドメインで継続公開し、提案・比較がしやすい形で提供",
    "本番化を見据えた「やりすぎない」構成で、コストと速度を最適化",
  ],
  scopeNote:
    "※PoCは検証用途として最小構成で提供します。SLA/24時間監視/大規模運用/監査対応が必要な場合は、体制に応じて別途ご相談ください。",
} as const;

export const CONTACT = {
  title: "お問い合わせ",
  description:
    "「このアイデア、まず動く形で検証したい」「要件や設計から一緒に整理したい」など、まずは状況を共有してください。目的と期限に合わせて、最適なPoCプランをご提案します。",
} as const;

export type HeroConstants = typeof HERO;
export type ServicesConstants = typeof SERVICES;
export type AboutConstants = typeof ABOUT;
export type ContactConstants = typeof CONTACT;
