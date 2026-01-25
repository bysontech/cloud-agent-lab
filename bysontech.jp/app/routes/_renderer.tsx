import { jsxRenderer, useRequestContext } from 'hono/jsx-renderer'
import { Style } from 'hono/css'
import { SITE, NAV, FOOTER } from '@/lib/constants'

export default jsxRenderer(({ children, title, description, ogImage }) => {
  const pageTitle = title ? `${title} | ${SITE.name}` : SITE.name
  const pageDescription = description || SITE.description
  const pageOgImage = ogImage || `${SITE.url}/og-image.png`

  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        {/* OGP */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:image" content={pageOgImage} />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:locale" content="ja_JP" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageOgImage} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* Tailwind CSS - inlined for SSR */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Base Tailwind styles */
          *, ::before, ::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: #e5e7eb; }
          html { line-height: 1.5; -webkit-text-size-adjust: 100%; font-feature-settings: normal; font-variation-settings: normal; -webkit-tap-highlight-color: transparent; }
          body { margin: 0; line-height: inherit; }
          h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }
          a { color: inherit; text-decoration: inherit; }
          button, input, select, textarea { font-family: inherit; font-size: 100%; font-weight: inherit; line-height: inherit; color: inherit; margin: 0; padding: 0; }
          button { cursor: pointer; background-color: transparent; background-image: none; }
          img, svg, video { display: block; vertical-align: middle; max-width: 100%; height: auto; }

          /* Utilities */
          .min-h-screen { min-height: 100vh; }
          .bg-white { background-color: #fff; }
          .bg-gray-50 { background-color: #f9fafb; }
          .bg-gray-100 { background-color: #f3f4f6; }
          .bg-primary-50 { background-color: #eff6ff; }
          .bg-primary-100 { background-color: #dbeafe; }
          .bg-primary-600 { background-color: #2563eb; }
          .bg-primary-700 { background-color: #1d4ed8; }
          .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
          .from-primary-50 { --tw-gradient-from: #eff6ff; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, transparent); }
          .via-white { --tw-gradient-stops: var(--tw-gradient-from), #fff, var(--tw-gradient-to, transparent); }
          .to-primary-50 { --tw-gradient-to: #eff6ff; }

          .text-white { color: #fff; }
          .text-gray-500 { color: #6b7280; }
          .text-gray-600 { color: #4b5563; }
          .text-gray-700 { color: #374151; }
          .text-gray-800 { color: #1f2937; }
          .text-gray-900 { color: #111827; }
          .text-primary-600 { color: #2563eb; }
          .text-primary-700 { color: #1d4ed8; }

          .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
          .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
          .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
          .text-2xl { font-size: 1.5rem; line-height: 2rem; }
          .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
          .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
          .text-5xl { font-size: 3rem; line-height: 1; }
          .text-6xl { font-size: 3.75rem; line-height: 1; }
          .text-center { text-align: center; }
          .font-medium { font-weight: 500; }
          .font-semibold { font-weight: 600; }
          .font-bold { font-weight: 700; }
          .leading-tight { line-height: 1.25; }
          .leading-relaxed { line-height: 1.625; }
          .tracking-tight { letter-spacing: -0.025em; }
          .whitespace-pre-line { white-space: pre-line; }
          .antialiased { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

          .font-sans { font-family: "Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif; }

          .flex { display: flex; }
          .inline-flex { display: inline-flex; }
          .grid { display: grid; }
          .hidden { display: none; }
          .flex-col { flex-direction: column; }
          .flex-wrap { flex-wrap: wrap; }
          .items-center { align-items: center; }
          .justify-center { justify-content: center; }
          .justify-between { justify-content: space-between; }
          .gap-2 { gap: 0.5rem; }
          .gap-3 { gap: 0.75rem; }
          .gap-4 { gap: 1rem; }
          .gap-6 { gap: 1.5rem; }
          .gap-8 { gap: 2rem; }

          .mx-auto { margin-left: auto; margin-right: auto; }
          .mb-4 { margin-bottom: 1rem; }
          .mb-10 { margin-bottom: 2.5rem; }
          .mt-3 { margin-top: 0.75rem; }
          .mt-4 { margin-top: 1rem; }
          .mt-6 { margin-top: 1.5rem; }
          .mt-8 { margin-top: 2rem; }
          .mt-10 { margin-top: 2.5rem; }
          .mt-12 { margin-top: 3rem; }

          .p-8 { padding: 2rem; }
          .px-4 { padding-left: 1rem; padding-right: 1rem; }
          .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
          .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
          .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
          .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
          .pb-8 { padding-bottom: 2rem; }
          .pt-8 { padding-top: 2rem; }

          .h-4 { height: 1rem; }
          .h-5 { height: 1.25rem; }
          .h-6 { height: 1.5rem; }
          .h-10 { height: 2.5rem; }
          .h-12 { height: 3rem; }
          .h-16 { height: 4rem; }
          .h-80 { height: 20rem; }
          .w-4 { width: 1rem; }
          .w-5 { width: 1.25rem; }
          .w-6 { width: 1.5rem; }
          .w-10 { width: 2.5rem; }
          .w-12 { width: 3rem; }
          .w-80 { width: 20rem; }
          .max-w-none { max-width: none; }
          .max-w-lg { max-width: 32rem; }
          .max-w-2xl { max-width: 42rem; }
          .max-w-3xl { max-width: 48rem; }
          .max-w-5xl { max-width: 64rem; }

          .relative { position: relative; }
          .absolute { position: absolute; }
          .sticky { position: sticky; }
          .top-0 { top: 0; }
          .-top-40 { top: -10rem; }
          .-right-40 { right: -10rem; }
          .-bottom-40 { bottom: -10rem; }
          .-left-40 { left: -10rem; }
          .z-50 { z-index: 50; }

          .overflow-hidden { overflow: hidden; }
          .rounded-lg { border-radius: 0.5rem; }
          .rounded-xl { border-radius: 0.75rem; }
          .rounded-2xl { border-radius: 1rem; }
          .rounded-full { border-radius: 9999px; }

          .border { border-width: 1px; }
          .border-b { border-bottom-width: 1px; }
          .border-t { border-top-width: 1px; }
          .border-gray-100 { border-color: #f3f4f6; }
          .border-gray-200 { border-color: #e5e7eb; }
          .border-gray-300 { border-color: #d1d5db; }

          .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
          .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }

          .blur-3xl { filter: blur(64px); }
          .backdrop-blur { backdrop-filter: blur(8px); }

          .transition-colors { transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
          .transition-shadow { transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }

          .hover\\:bg-gray-50:hover { background-color: #f9fafb; }
          .hover\\:bg-gray-100:hover { background-color: #f3f4f6; }
          .hover\\:bg-primary-700:hover { background-color: #1d4ed8; }
          .hover\\:text-gray-700:hover { color: #374151; }
          .hover\\:text-primary-600:hover { color: #2563eb; }
          .hover\\:text-primary-700:hover { color: #1d4ed8; }
          .hover\\:shadow-md:hover { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }

          .focus\\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; }
          .focus\\:ring-2:focus { box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); --tw-ring-offset-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); }
          .focus\\:ring-primary-500:focus { --tw-ring-color: #3b82f6; }
          .focus\\:ring-offset-2:focus { --tw-ring-offset-width: 2px; }

          .group:hover .group-hover\\:shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }

          .bg-white\\/95 { background-color: rgb(255 255 255 / 0.95); }
          .bg-primary-100\\/50 { background-color: rgb(219 234 254 / 0.5); }

          /* Container */
          .container-custom { margin-left: auto; margin-right: auto; max-width: 64rem; padding-left: 1rem; padding-right: 1rem; }
          .section-padding { padding-top: 3rem; padding-bottom: 3rem; }
          .btn-primary { display: inline-flex; align-items: center; justify-content: center; border-radius: 0.5rem; background-color: #2563eb; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 600; color: #fff; transition: background-color 150ms; }
          .btn-primary:hover { background-color: #1d4ed8; }
          .btn-secondary { display: inline-flex; align-items: center; justify-content: center; border-radius: 0.5rem; border: 1px solid #d1d5db; background-color: #fff; padding: 0.75rem 1.5rem; font-size: 0.875rem; font-weight: 600; color: #374151; transition: background-color 150ms; }
          .btn-secondary:hover { background-color: #f9fafb; }

          /* Responsive */
          @media (min-width: 640px) {
            .sm\\:flex-row { flex-direction: row; }
            .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
            .sm\\:py-16 { padding-top: 4rem; padding-bottom: 4rem; }
            .sm\\:text-xl { font-size: 1.25rem; line-height: 1.75rem; }
            .sm\\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
            .sm\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            .section-padding { padding-top: 4rem; padding-bottom: 4rem; }
            .container-custom { padding-left: 1.5rem; padding-right: 1.5rem; }
          }
          @media (min-width: 768px) {
            .md\\:flex { display: flex; }
            .md\\:hidden { display: none; }
          }
          @media (min-width: 1024px) {
            .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
            .lg\\:py-20 { padding-top: 5rem; padding-bottom: 5rem; }
            .lg\\:text-5xl { font-size: 3rem; line-height: 1; }
            .section-padding { padding-top: 5rem; padding-bottom: 5rem; }
            .container-custom { padding-left: 2rem; padding-right: 2rem; }
          }

          /* Smooth scroll */
          html { scroll-behavior: smooth; }
        ` }} />
      </head>
      <body class="min-h-screen bg-white font-sans">
        {/* Header */}
        <header class="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
          <nav class="container-custom">
            <div class="flex h-16 items-center justify-between">
              <a href="/" class="text-xl font-bold text-primary-600">
                {SITE.name}
              </a>

              {/* Desktop Navigation */}
              <div class="hidden items-center gap-8 md:flex">
                <a href="/" class="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600">
                  {NAV.home}
                </a>
                <a href="/#services" class="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600">
                  {NAV.services}
                </a>
                <a href="/#about" class="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600">
                  {NAV.about}
                </a>
                <a href="/#contact" class="btn-primary text-sm">
                  {NAV.contact}
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                class="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
                aria-label="メニューを開く"
                onclick="document.getElementById('mobile-menu').classList.toggle('hidden')"
              >
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <div id="mobile-menu" class="hidden border-t border-gray-100 py-4 md:hidden">
              <div class="flex flex-col gap-4">
                <a href="/" class="text-sm font-medium text-gray-600">
                  {NAV.home}
                </a>
                <a href="/#services" class="text-sm font-medium text-gray-600">
                  {NAV.services}
                </a>
                <a href="/#about" class="text-sm font-medium text-gray-600">
                  {NAV.about}
                </a>
                <a href="/#contact" class="btn-primary text-center text-sm">
                  {NAV.contact}
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer class="border-t border-gray-100 bg-gray-50">
          <div class="container-custom py-8">
            <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div class="flex items-center gap-6">
                <a href="/" class="text-lg font-bold text-gray-900">
                  {SITE.name}
                </a>
                <a href="/sharelist/privacy" class="text-sm text-gray-500 hover:text-gray-700">
                  {FOOTER.links.privacy}
                </a>
              </div>
              <p class="text-sm text-gray-500">
                {FOOTER.copyright}
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
})
