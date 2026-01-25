import { createRoute } from 'honox/factory'

const DELETE_INFO = {
  title: 'アカウント削除のリクエスト（ShareList）',
  lastUpdated: '2026-01-25'
} as const

export default createRoute((c) => {
  return c.render(
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <article class="mx-auto max-w-3xl">
          <header class="mb-10 border-b border-gray-200 pb-8">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              {DELETE_INFO.title}
            </h1>
            <p class="mt-4 text-sm text-gray-500">
              ShareListのアカウントおよび関連データの削除を希望される場合は、以下の手順で削除リクエストを送信してください。
            </p>
          </header>

          <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <section class="mb-10">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">削除できるもの</h2>
              <ul class="text-gray-600 leading-relaxed">
                <li>アカウント（アプリ内で使用される識別子・認証情報）</li>
                <li>ユーザーが作成したリスト・アイテム・グループなどのデータ（アカウントに紐づくもの）</li>
              </ul>
            </section>

            <section class="mb-10">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">削除リクエスト方法</h2>
              <div class="rounded-lg border border-gray-200 bg-gray-50 px-6 py-4 text-gray-600 leading-relaxed">
                <p>次の情報を添えて、下記メールアドレスへご連絡ください。</p>
                <ul class="mt-3">
                  <li>件名：ShareList アカウント削除依頼</li>
                  <li>本文に記載する情報：端末ID（サポート用）</li>
                </ul>
                <p class="mt-4">
                  連絡先メール：<a class="text-primary-600 hover:text-primary-700" href="mailto:support@bysontech.jp">support@bysontech.jp</a>
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  ※ 不正な削除依頼を防止するため、アプリ内の情報と照合できる追加情報の提示をお願いする場合があります。
                </p>
              </div>
            </section>

            <section class="mb-10">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">処理にかかる時間</h2>
              <p class="text-gray-600 leading-relaxed">
                削除リクエストを確認後、原則として<strong>7日以内</strong>に削除処理を行います。<br />
                （混雑状況により前後することがあります）
              </p>
            </section>

            <section class="mb-10">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">削除後の取り扱い</h2>
              <ul class="text-gray-600 leading-relaxed">
                <li>削除が完了すると、同じデータを元に戻すことはできません。</li>
                <li>
                  法令遵守や不正対策のため、最小限のログ情報を一定期間保持する場合があります。<br />
                  <span class="text-sm text-gray-500">（例：障害対応・不正アクセス調査に必要な範囲）</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 class="mb-4 text-lg font-semibold text-gray-900">補足</h2>
              <p class="text-gray-600 leading-relaxed">
                ShareListはアプリ内でゲスト方式の利用が可能ですが、削除を希望される場合は上記の方法でご連絡ください。
              </p>
            </section>
          </div>

          <footer class="mt-12 border-t border-gray-200 pt-8">
            <div class="flex flex-wrap gap-4 text-sm font-medium text-primary-600">
              <a class="hover:text-primary-700" href="/sharelist/privacy">
                プライバシーポリシー
              </a>
              <a class="hover:text-primary-700" href="/sharelist/terms">
                利用規約
              </a>
            </div>
            <p class="mt-4 text-sm text-gray-500">
              最終更新日: {DELETE_INFO.lastUpdated}
            </p>
          </footer>
        </article>
      </div>
    </section>,
    {
      title: 'ShareList アカウント削除のリクエスト',
      description: 'ShareListのアカウント削除に関する手続きと必要事項をご案内します。'
    }
  )
})
