import { createRoute } from "honox/factory";
import { SHARELIST_META, SHARELIST_TERMS } from "@/lib/pages/sharelist";

const renderContactLine = (line: string) => {
  const emailPrefix = "メールアドレス：";
  if (line.startsWith(emailPrefix)) {
    const email = line.slice(emailPrefix.length);
    return (
      <>
        {emailPrefix}
        <a
          class="text-primary-600 hover:text-primary-700"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </>
    );
  }

  return line;
};

const renderTermsContent = (
  section: (typeof SHARELIST_TERMS.sections)[number],
) => {
  if (section.type === "ul" && Array.isArray(section.content)) {
    return (
      <ul class="text-gray-600 leading-relaxed">
        {section.content.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }

  if (section.type === "mixed" && Array.isArray(section.items)) {
    return (
      <div class="text-gray-600 leading-relaxed">
        <p>{section.content}</p>
        <ul class="mt-3">
          {section.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (Array.isArray(section.content)) {
    const lines = section.content.flatMap((line, index) => {
      const nodes = [renderContactLine(line)];
      if (index < section.content.length - 1) {
        nodes.push(<br key={`br-${index}`} />);
      }
      return nodes;
    });

    return <p class="text-gray-600 leading-relaxed">{lines}</p>;
  }

  return <p class="text-gray-600 leading-relaxed">{section.content}</p>;
};

export default createRoute((c) => {
  return c.render(
    <section class="section-padding">
      <div class="container-custom">
        <article class="mx-auto max-w-3xl">
          <header class="mb-10 border-b border-gray-200 pb-8">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              {SHARELIST_TERMS.title}
            </h1>
            <p class="mt-4 text-sm text-gray-500">
              最終更新日: {SHARELIST_TERMS.lastUpdated}
            </p>
            <p class="mt-4 text-sm text-gray-500">{SHARELIST_META.label}</p>
          </header>

          <div class="prose prose-gray max-w-none">
            {SHARELIST_TERMS.sections.map((section, index) => (
              <section class="mb-10" key={index}>
                <h2 class="mb-4 text-lg font-semibold text-gray-900">
                  {index + 1}. {section.title}
                </h2>
                {renderTermsContent(section)}
              </section>
            ))}
          </div>

          <footer class="mt-12 border-t border-gray-200 pt-8">
            <div class="flex flex-wrap gap-4 text-sm font-medium text-primary-600">
              <a class="hover:text-primary-700" href="/sharelist/privacy">
                プライバシーポリシー
              </a>
            </div>
          </footer>
        </article>
      </div>
    </section>,
    {
      title: `ShareList ${SHARELIST_TERMS.title}`,
      description: "ShareListの利用規約とご利用に関するルールをご案内します。",
    },
  );
});
