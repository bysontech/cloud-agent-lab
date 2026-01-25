import { createRoute } from 'honox/factory'
import { SHARELIST_DELETE, SHARELIST_META } from '@/lib/pages/sharelist'

export default createRoute((c) => {
  return c.render(
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <article class="mx-auto max-w-3xl">
          <header class="mb-10 border-b border-gray-200 pb-8">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              {SHARELIST_DELETE.title}
            </h1>
            <p class="mt-4 text-sm text-gray-500">
              {SHARELIST_DELETE.intro}
            </p>
          </header>

          <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <section class="mb-10">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">削除できるもの</h2>
              <ul class="text-gray-600 leading-relaxed">
                {SHARELIST_DELETE.deletableItems.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </section>

            <section class="mb-10">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">削除リクエスト方法</h2>
              <div class="rounded-lg border border-gray-200 bg-gray-50 px-6 py-4 text-gray-600 leading-relaxed">
                <p>{SHARELIST_DELETE.request.intro}</p>
                <ul class="mt-3">
                  <li>{SHARELIST_DELETE.request.subject}</li>
                  <li>本文に記載する情報：{SHARELIST_DELETE.request.details[0]}</li>
                </ul>
                <p class="mt-4">
                  連絡先メール：<a class="text-primary-600 hover:text-primary-700" href={`mailto:${SHARELIST_META.supportEmail}`}>{SHARELIST_META.supportEmail}</a>
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  {SHARELIST_DELETE.request.note}
                </p>
              </div>
            </section>

            <section class="mb-10">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">処理にかかる時間</h2>
              <p class="text-gray-600 leading-relaxed">
                {SHARELIST_DELETE.processing.lead}<strong>{SHARELIST_DELETE.processing.highlight}</strong>{SHARELIST_DELETE.processing.trailing}<br />
                {SHARELIST_DELETE.processing.note}
              </p>
            </section>

            <section class="mb-10">
              <h2 class="mb-4 text-lg font-semibold text-gray-900">削除後の取り扱い</h2>
              <ul class="text-gray-600 leading-relaxed">
                <li>{SHARELIST_DELETE.afterDelete.items[0]}</li>
                <li>
                  {SHARELIST_DELETE.afterDelete.items[1]}<br />
                  <span class="text-sm text-gray-500">{SHARELIST_DELETE.afterDelete.note}</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 class="mb-4 text-lg font-semibold text-gray-900">補足</h2>
              <p class="text-gray-600 leading-relaxed">
                {SHARELIST_DELETE.supplement}
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
              最終更新日: {SHARELIST_DELETE.lastUpdated}
            </p>
          </footer>
        </article>
      </div>
    </section>,
    {
      title: 'ShareList アカウント削除のリクエスト',
      description: SHARELIST_DELETE.description
    }
  )
})
