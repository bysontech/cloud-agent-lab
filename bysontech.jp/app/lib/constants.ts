/**
 * Site constants for i18n readiness
 * Future: Split by language (e.g., constants.ja.ts, constants.en.ts)
 */

export const SITE = {
  name: 'BysonTech',
  tagline: 'テクノロジーで未来を創る',
  description: 'BysonTechは、クラウドインフラ・システム開発・技術コンサルティングを提供するテクノロジーパートナーです。',
  url: 'https://bysontech.jp',
  author: 'BysonTech',
  email: 'contact@bysontech.jp'
} as const

export const NAV = {
  home: 'ホーム',
  about: '会社概要',
  services: 'サービス',
  contact: 'お問い合わせ'
} as const

export const HERO = {
  title: 'テクノロジーで\nビジネスを加速',
  subtitle: 'クラウドインフラ構築から開発支援まで、お客様のDX推進をトータルサポート',
  cta: 'お問い合わせ',
  ctaSecondary: 'サービスを見る'
} as const

export const SERVICES = {
  title: 'サービス',
  items: [
    {
      title: 'クラウドインフラ構築',
      description: 'AWS / Google Cloud / Azure など、各種クラウドプラットフォームの設計・構築・運用をサポートします。',
      icon: 'cloud'
    },
    {
      title: 'システム開発',
      description: 'Webアプリケーション、API開発、マイクロサービス構築など、モダンな技術スタックでの開発を提供します。',
      icon: 'code'
    },
    {
      title: '技術コンサルティング',
      description: 'システムアーキテクチャの設計、技術選定、チーム体制構築など、技術戦略の立案をサポートします。',
      icon: 'consulting'
    }
  ]
} as const

export const ABOUT = {
  title: '会社概要',
  description: 'BysonTechは、先進的なテクノロジーを活用し、お客様のビジネス課題を解決するテクノロジーパートナーです。クラウドネイティブな開発と運用のノウハウを活かし、スケーラブルで信頼性の高いシステムを提供します。',
  features: [
    '10年以上のクラウド構築経験',
    'アジャイル開発による柔軟な対応',
    '24時間対応のサポート体制'
  ]
} as const

export const CONTACT = {
  title: 'お問い合わせ',
  description: 'プロジェクトのご相談、お見積もりなど、お気軽にお問い合わせください。'
} as const

export const FOOTER = {
  copyright: '© 2024 BysonTech. All rights reserved.',
  links: {
    privacy: 'プライバシーポリシー',
    terms: '利用規約'
  }
} as const

export const PRIVACY = {
  title: 'プライバシーポリシー',
  lastUpdated: '2024年10月1日',
  sections: [
    {
      title: '個人情報の取り扱いについて',
      content: 'BysonTech（以下「当社」）は、お客様の個人情報保護の重要性を認識し、個人情報の保護に関する法律（個人情報保護法）を遵守するとともに、以下のプライバシーポリシーに従い、適切な取り扱いおよび保護に努めます。'
    },
    {
      title: '個人情報の定義',
      content: '本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定義される個人情報、すなわち生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの、または個人識別符号が含まれるものをいいます。'
    },
    {
      title: '個人情報の収集',
      content: '当社は、以下の場合に個人情報を収集することがあります：\n・お問い合わせフォームからのご連絡\n・サービスのお申し込み\n・メールマガジンの登録\n・その他当社サービスのご利用'
    },
    {
      title: '個人情報の利用目的',
      content: '当社は、収集した個人情報を以下の目的で利用いたします：\n・お問い合わせへの回答\n・サービスの提供および改善\n・新サービスや更新情報のご案内\n・統計データの作成（個人を識別できない形式）'
    },
    {
      title: '個人情報の第三者提供',
      content: '当社は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません：\n・お客様の同意がある場合\n・法令に基づく場合\n・人の生命、身体または財産の保護のために必要な場合\n・公衆衛生の向上または児童の健全な育成の推進のために必要な場合'
    },
    {
      title: '個人情報の安全管理',
      content: '当社は、個人情報の漏洩、滅失、毀損の防止その他の安全管理のために、必要かつ適切な措置を講じます。'
    },
    {
      title: 'Cookieの使用',
      content: '当社ウェブサイトでは、サービス向上のためCookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。'
    },
    {
      title: 'お問い合わせ窓口',
      content: '個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。\n\nBysonTech\nメール: contact@bysontech.jp'
    },
    {
      title: 'プライバシーポリシーの変更',
      content: '当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトに掲載することでお知らせいたします。'
    }
  ]
} as const

// Type exports for i18n expansion
export type SiteConstants = typeof SITE
export type NavConstants = typeof NAV
export type HeroConstants = typeof HERO
export type ServicesConstants = typeof SERVICES
export type AboutConstants = typeof ABOUT
export type ContactConstants = typeof CONTACT
export type FooterConstants = typeof FOOTER
export type PrivacyConstants = typeof PRIVACY
