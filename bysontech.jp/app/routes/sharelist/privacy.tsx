import { createRoute } from 'honox/factory'
import { SITE } from '@/lib/site'
import { SHARELIST_PRIVACY } from '@/lib/pages/sharelist'

export default createRoute((c) => {
  return c.render(
    <section class="section-padding">
      <div class="container-custom">
        <article class="mx-auto max-w-3xl">
          <header class="mb-10 border-b border-gray-200 pb-8">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              {SHARELIST_PRIVACY.title}
            </h1>
            <p class="mt-4 text-sm text-gray-500">
              最終更新日: {SHARELIST_PRIVACY.lastUpdated}
            </p>
          </header>

          <div class="prose prose-gray max-w-none">
            {SHARELIST_PRIVACY.sections.map((section, index) => (
              <section class="mb-10" key={index}>
                <h2 class="mb-4 text-lg font-semibold text-gray-900">
                  {index + 1}. {section.title}
                </h2>
                <div class="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          <footer class="mt-12 border-t border-gray-200 pt-8">
            <a
              href="/"
              class="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              ホームに戻る
            </a>
          </footer>
        </article>
      </div>
    </section>,
    {
      title: SHARELIST_PRIVACY.title,
      description: `${SITE.name}のプライバシーポリシー。個人情報の取り扱いについてご説明します。`
    }
  )
})
