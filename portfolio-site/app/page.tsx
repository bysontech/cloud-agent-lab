export default function Home() {
  const projects = [
    {
      title: "プロジェクト1",
      description: "プロジェクトの説明文がここに入ります。どのような技術を使用し、何を達成したかを記載します。",
      link: "https://example.com/project1"
    },
    {
      title: "プロジェクト2",
      description: "プロジェクトの説明文がここに入ります。どのような技術を使用し、何を達成したかを記載します。",
      link: "https://example.com/project2"
    },
    {
      title: "プロジェクト3",
      description: "プロジェクトの説明文がここに入ります。どのような技術を使用し、何を達成したかを記載します。",
      link: "https://example.com/project3"
    }
  ];

  const skills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "Git",
    "HTML/CSS",
    "Next.js",
    "TypeScript",
    "Tailwind CSS"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 font-light">
            Software Engineer / Developer
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
            <h2 className="text-4xl font-bold mb-6 text-slate-800 dark:text-white border-b-4 border-emerald-500 pb-3 inline-block">
              About
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              ここにあなたの自己紹介を記載します。あなたのスキル、経験、興味などを簡潔に説明してください。
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-white border-b-4 border-emerald-500 pb-3 inline-block">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-700 dark:text-emerald-400 font-semibold hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
                >
                  View Project
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-white border-b-4 border-emerald-500 pb-3 inline-block">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white mt-16">
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-lg mb-6">&copy; 2026 Your Name. All rights reserved.</p>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors font-medium hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors font-medium hover:underline"
            >
              Twitter
            </a>
            <a
              href="mailto:example@email.com"
              className="text-slate-300 hover:text-white transition-colors font-medium hover:underline"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
