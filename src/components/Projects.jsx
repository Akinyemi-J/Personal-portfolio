function Projects() {
  const projects = [
    {
      title: "News Credibility Analyzer",
      category: "Machine Learning",
      description: "Capstone project using Logistic Regression and TF-IDF to classify news as real or fake, with a styled web interface for live predictions.",
      tags: ["Python", "Scikit-learn", "Flask"],
      link: "https://github.com/Akinyemi-J/News-Credibility-Analyzer.git",
    },
    {
      title: "Phishing Email Detector",
      category: "Machine Learning · Security",
      description: "A phishing detection web app that helps identify suspicious emails by analyzing their content, links, and structure for possible threats.",
      tags: ["Python", "Scikit-learn"],
      link: "https://github.com/Akinyemi-J/Phishing-Email-Detector.git",
    },
    {
      title: "Endless Runner Game",
      category: "Game Development",
      description: "A fast-paced endless runner built from scratch in Unity, complete with custom mechanics and scoring.",
      tags: ["Unity", "C#"],
      link: "https://github.com/Akinyemi-J/Endless-Runner-Game.git",
    },
    {
      title: "Weather App",
      category: "Web Development",
      description: "A clean weather app pulling real-time data from a weather API.",
      tags: ["JavaScript", "API Integration"],
      link: "https://github.com/Akinyemi-J/Weather-App.git",
    },
    {
      title: "PDF Converter",
      category: "Tools",
      description: "A Java-based tool for converting and manipulating PDF documents.",
      tags: ["Java"],
      link: "https://github.com/Akinyemi-J/PDF-Converter.git",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-[#F5F3FF] text-4xl font-bold text-center mb-12">
          My <span className="text-violet-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#15131C] border border-white/10 rounded-2xl p-6 flex flex-col hover:border-violet-500/40 transition"
            >
              <p className="text-violet-400 text-xs font-medium mb-2 uppercase tracking-wide">
                {project.category}
              </p>

              <h3 className="text-[#F5F3FF] text-xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-[#9CA3AF] text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/5 text-[#F5F3FF] text-xs px-3 py-1 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-violet-400 text-sm font-semibold hover:underline">
                   View Code
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects