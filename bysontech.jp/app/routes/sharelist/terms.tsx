import { createRoute } from 'honox/factory'

const TERMS = {
  title: '利用規約',
  lastUpdated: '2026年1月5日'
} as const

const TERMS_SECTIONS = [
  {
    title: '適用',
    content: (
      <p class="text-gray-600 leading-relaxed">
        本規約は、スマートフォンアプリ「ShareList」（以下「本アプリ」）を利用するすべてのユーザーに適用されます。
      </p>
    )
  },
  {
    title: '利用条件',
    content: (
      <p class="text-gray-600 leading-relaxed">
        ユーザーは、本規約に同意のうえ、本アプリを利用するものとします。
      </p>
    )
  },
  {
    title: '禁止事項',
    content: (
      <div class="text-gray-600 leading-relaxed">
        <p>ユーザーは、以下の行為を行ってはなりません。</p>
        <ul class="mt-3">
          <li>法令または公序良俗に反する行為</li>
          <li>本アプリの運営を妨害する行為</li>
          <li>不正アクセス、またはこれを試みる行為</li>
          <li>他のユーザーまたは第三者に不利益・損害を与える行為</li>
        </ul>
      </div>
    )
  },
  {
    title: '免責事項',
    content: (
      <ul class="text-gray-600 leading-relaxed">
        <li>当方は、本アプリの内容について正確性・完全性を保証するものではありません。</li>
        <li>本アプリの利用により発生した損害について、当方は一切の責任を負いません。</li>
        <li>本アプリは、予告なく内容の変更・停止・終了を行うことがあります。</li>
      </ul>
    )
  },
  {
    title: '著作権',
    content: (
      <p class="text-gray-600 leading-relaxed">
        本アプリに関する著作権その他の権利は、当方または正当な権利者に帰属します。
      </p>
    )
  },
  {
    title: '規約の変更',
    content: (
      <p class="text-gray-600 leading-relaxed">
        当方は、必要に応じて本規約を変更することがあります。変更後の規約は、本ページに掲載した時点で効力を生じます。
      </p>
    )
  },
  {
    title: '準拠法・管轄',
    content: (
      <p class="text-gray-600 leading-relaxed">
        本規約は日本法を準拠法とします。
      </p>
    )
  },
  {
    title: 'お問い合わせ',
    content: (
      <p class="text-gray-600 leading-relaxed">
        本規約に関するお問い合わせは、以下までご連絡ください。<br />
        メールアドレス：<a class="text-primary-600 hover:text-primary-700" href="mailto:support@bysontech.jp">support@bysontech.jp</a><br />
        運営者名：BysonTech
      </p>
    )
  }
] as const

export default createRoute((c) => {
  return c.render(
    <section class="section-padding">
      <div class="container-custom">
        <article class="mx-auto max-w-3xl">
          <header class="mb-10 border-b border-gray-200 pb-8">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              {TERMS.title}
            </h1>
            <p class="mt-4 text-sm text-gray-500">
              最終更新日: {TERMS.lastUpdated}
            </p>
            <p class="mt-4 text-sm text-gray-500">ShareList / BysonTech</p>
          </header>

          <div class="prose prose-gray max-w-none">
            {TERMS_SECTIONS.map((section, index) => (
              <section class="mb-10" key={index}>
                <h2 class="mb-4 text-lg font-semibold text-gray-900">
                  {index + 1}. {section.title}
                </h2>
                {section.content}
              </section>
            ))}
          </div>

          <footer class="mt-12 border-t border-gray-200 pt-8">
            <div class="flex flex-wrap gap-4 text-sm font-medium text-primary-600">
              <a class="hover:text-primary-700" href="/sharelist/privacy">
                プライバシーポリシー
              </a>
              <a class="hover:text-primary-700" href="/sharelist/delete">
                アカウント削除のリクエスト
              </a>
            </div>
          </footer>
        </article>
      </div>
    </section>,
    {
      title: `ShareList ${TERMS.title}`,
      description: 'ShareListの利用規約とご利用に関するルールをご案内します。'
    }
  )
})
