/**
 * Site-wide constants for shared layout and metadata.
 */

export const SITE = {
  name: "BysonTech",
  tagline: "テクノロジーで未来を創る",
  description:
    "BysonTechは、クラウドインフラ・システム開発・技術コンサルティングを提供するテクノロジーパートナーです。",
  url: "https://bysontech.jp",
  author: "BysonTech",
  email: "contact@bysontech.jp",
} as const;

export const NAV = {
  home: "ホーム",
  about: "会社概要",
  services: "サービス",
  contact: "お問い合わせ",
} as const;

export const FOOTER = {
  copyright: "© 2026 BysonTech. All rights reserved.",
  links: {
    privacy: "プライバシーポリシー",
    terms: "利用規約",
  },
} as const;

export type SiteConstants = typeof SITE;
export type NavConstants = typeof NAV;
export type FooterConstants = typeof FOOTER;
