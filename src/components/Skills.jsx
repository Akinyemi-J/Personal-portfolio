function Skills() {
  const skillCategories = [
    { title: "Languages", skills: ["Python", "JavaScript", "Java", "C#"] },
    { title: "Machine Learning", skills: ["Scikit-learn", "TF-IDF", "NLP", "Pandas"] },
    { title: "Web Development", skills: ["React", "Tailwind CSS", "Flask", "HTML/CSS"] },
    { title: "Tools & Game Dev", skills: ["Unity", "Git", "REST APIs"] },
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-[#F5F3FF] text-4xl font-bold text-center mb-12">
          My <span className="text-violet-500">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-[#15131C] border border-white/10 rounded-2xl p-6">
              <h3 className="text-violet-400 font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/5 text-[#F5F3FF] text-sm px-4 py-2 rounded-full border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills