import { createRoute } from 'honox/factory'
import { SITE, HERO, SERVICES, ABOUT, CONTACT } from '@/lib/constants'

export default createRoute((c) => {
  return c.render(
    <>
      {/* Hero Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div class="container-custom section-padding">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {HERO.title.split('\n').map((line, i) => (
                <>
                  {line}
                  {i === 0 && <br />}
                </>
              ))}
            </h1>
            <p class="mt-6 text-lg text-gray-600 sm:text-xl">
              {HERO.subtitle}
            </p>
            <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#contact" class="btn-primary">
                {HERO.cta}
              </a>
              <a href="#services" class="btn-secondary">
                {HERO.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary-100/50 blur-3xl" />
        <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-100/50 blur-3xl" />
      </section>

      {/* Services Section */}
      <section id="services" class="section-padding">
        <div class="container-custom">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              {SERVICES.title}
            </h2>
          </div>

          <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.items.map((service) => (
              <div class="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  {service.icon === 'cloud' && (
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  )}
                  {service.icon === 'code' && (
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )}
                  {service.icon === 'consulting' && (
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                </div>
                <h3 class="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p class="mt-3 text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              {ABOUT.title}
            </h2>
            <p class="mt-6 text-lg leading-relaxed text-gray-600">
              {ABOUT.description}
            </p>
          </div>

          <div class="mt-12 flex flex-wrap items-center justify-center gap-6">
            {ABOUT.features.map((feature) => (
              <div class="flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-sm">
                <svg class="h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="section-padding">
        <div class="container-custom">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              {CONTACT.title}
            </h2>
            <p class="mt-4 text-gray-600">
              {CONTACT.description}
            </p>

            <div class="mt-10">
              <a
                href={`mailto:${SITE.email}`}
                class="btn-primary inline-flex items-center gap-2"
              >
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>,
    {
      title: SITE.tagline,
      description: SITE.description
    }
  )
})
