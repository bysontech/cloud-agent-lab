export const SHARELIST_META = {
  label: "ShareList / BysonTech",
  supportEmail: "support@bysontech.jp",
  operator: "BysonTech",
} as const;

export const SHARELIST_PRIVACY = {
  title: "プライバシーポリシー",
  lastUpdated: "2026年1月1日",
  sections: [
    {
      title: "個人情報の取り扱いについて",
      content:
        "BysonTech（以下「当社」）は、お客様の個人情報保護の重要性を認識し、個人情報の保護に関する法律（個人情報保護法）を遵守するとともに、以下のプライバシーポリシーに従い、適切な取り扱いおよび保護に努めます。",
    },
    {
      title: "個人情報の定義",
      content:
        "本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定義される個人情報、すなわち生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの、または個人識別符号が含まれるものをいいます。",
    },
    {
      title: "個人情報の収集",
      content:
        "当社は、以下の場合に個人情報を収集することがあります：\n・お問い合わせフォームからのご連絡\n・サービスのお申し込み\n・メールマガジンの登録\n・その他当社サービスのご利用",
    },
    {
      title: "個人情報の利用目的",
      content:
        "当社は、収集した個人情報を以下の目的で利用いたします：\n・お問い合わせへの回答\n・サービスの提供および改善\n・新サービスや更新情報のご案内\n・統計データの作成（個人を識別できない形式）",
    },
    {
      title: "個人情報の第三者提供",
      content:
        "当社は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません：\n・お客様の同意がある場合\n・法令に基づく場合\n・人の生命、身体または財産の保護のために必要な場合\n・公衆衛生の向上または児童の健全な育成の推進のために必要な場合",
    },
    {
      title: "個人情報の安全管理",
      content:
        "当社は、個人情報の漏洩、滅失、毀損の防止その他の安全管理のために、必要かつ適切な措置を講じます。",
    },
    {
      title: "Cookieの使用",
      content:
        "当社ウェブサイトでは、サービス向上のためCookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。",
    },
    {
      title: "お問い合わせ窓口",
      content:
        "個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。\n\nBysonTech\nメール: contact@bysontech.jp",
    },
    {
      title: "プライバシーポリシーの変更",
      content:
        "当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトに掲載することでお知らせいたします。",
    },
  ],
} as const;

export const SHARELIST_TERMS = {
  title: "利用規約",
  lastUpdated: "2026年1月1日",
  sections: [
    {
      title: "適用",
      type: "p",
      content:
        "本規約は、スマートフォンアプリ「ShareList」（以下「本アプリ」）を利用するすべてのユーザーに適用されます。",
    },
    {
      title: "利用条件",
      type: "p",
      content:
        "ユーザーは、本規約に同意のうえ、本アプリを利用するものとします。",
    },
    {
      title: "禁止事項",
      type: "mixed",
      content: "ユーザーは、以下の行為を行ってはなりません。",
      items: [
        "法令または公序良俗に反する行為",
        "本アプリの運営を妨害する行為",
        "不正アクセス、またはこれを試みる行為",
        "他のユーザーまたは第三者に不利益・損害を与える行為",
      ],
    },
    {
      title: "免責事項",
      type: "ul",
      content: [
        "当方は、本アプリの内容について正確性・完全性を保証するものではありません。",
        "本アプリの利用により発生した損害について、当方は一切の責任を負いません。",
        "本アプリは、予告なく内容の変更・停止・終了を行うことがあります。",
      ],
    },
    {
      title: "著作権",
      type: "p",
      content:
        "本アプリに関する著作権その他の権利は、当方または正当な権利者に帰属します。",
    },
    {
      title: "規約の変更",
      type: "p",
      content:
        "当方は、必要に応じて本規約を変更することがあります。変更後の規約は、本ページに掲載した時点で効力を生じます。",
    },
    {
      title: "準拠法・管轄",
      type: "p",
      content: "本規約は日本法を準拠法とします。",
    },
    {
      title: "お問い合わせ",
      type: "p",
      content: [
        "本規約に関するお問い合わせは、以下までご連絡ください。",
        "メールアドレス：support@bysontech.jp",
        "運営者名：BysonTech",
      ],
    },
  ],
} as const;

export const SHARELIST_DELETE = {
  title: "アカウント削除のリクエスト（ShareList）",
  lastUpdated: "2026-01-01",
  description:
    "ShareListのアカウント削除に関する手続きと必要事項をご案内します。",
  intro:
    "ShareListのアカウントおよび関連データの削除を希望される場合は、以下の手順で削除リクエストを送信してください。",
  deletableItems: [
    "アカウント（アプリ内で使用される識別子・認証情報）",
    "ユーザーが作成したリスト・アイテム・グループなどのデータ（アカウントに紐づくもの）",
  ],
  request: {
    intro: "次の情報を添えて、下記メールアドレスへご連絡ください。",
    subject: "件名：ShareList アカウント削除依頼",
    details: ["端末ID（サポート用）"],
    contactEmail: "support@bysontech.jp",
    note: "※ 不正な削除依頼を防止するため、アプリ内の情報と照合できる追加情報の提示をお願いする場合があります。",
  },
  processing: {
    lead: "削除リクエストを確認後、原則として",
    highlight: "7日以内",
    trailing: "に削除処理を行います。",
    note: "（混雑状況により前後することがあります）",
  },
  afterDelete: {
    items: [
      "削除が完了すると、同じデータを元に戻すことはできません。",
      "法令遵守や不正対策のため、最小限のログ情報を一定期間保持する場合があります。",
    ],
    note: "（例：障害対応・不正アクセス調査に必要な範囲）",
  },
  supplement:
    "ShareListはアプリ内でゲスト方式の利用が可能ですが、削除を希望される場合は上記の方法でご連絡ください。",
} as const;

export type ShareListPrivacyConstants = typeof SHARELIST_PRIVACY;
export type ShareListTermsConstants = typeof SHARELIST_TERMS;
export type ShareListDeleteConstants = typeof SHARELIST_DELETE;
