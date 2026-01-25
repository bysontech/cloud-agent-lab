import { NotFoundHandler } from 'hono'
import { SITE } from '@/lib/site'

const handler: NotFoundHandler = (c) => {
  return c.render(
    <section class="section-padding">
      <div class="container-custom">
        <div class="mx-auto max-w-lg text-center">
          <p class="text-6xl font-bold text-primary-600">404</p>
          <h1 class="mt-4 text-2xl font-bold text-gray-900">
            ページが見つかりません
          </h1>
          <p class="mt-4 text-gray-600">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
          <div class="mt-8">
            <a href="/" class="btn-primary">
              ホームに戻る
            </a>
          </div>
        </div>
      </div>
    </section>,
    {
      title: 'ページが見つかりません',
      description: `お探しのページは存在しないか、移動した可能性があります。`
    }
  )
}

export default handler
