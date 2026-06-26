function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-[#F5F3FF] text-4xl font-bold mb-6">
          About <span className="text-violet-500">Me</span>
        </h2>

        <p className="text-[#9CA3AF] text-lg leading-relaxed mb-12">
          I'm a Computer Science student and aspiring software engineer with a passion for building modern web 
          applications and exploring AI. I enjoy solving problems through code, learning new technologies, and 
          creating projects that make an impact. I'm always looking for opportunities to grow as a developer while 
          taking on new challenges. Outside the code, I split my time between modeling 
          and basketball, which probably explains why I like things both sharp and high-energy.
        </p>

        {/* Quick facts row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#15131C] border border-white/10 rounded-2xl p-6">
            <p className="text-violet-400 text-sm font-medium mb-1">Education</p>
            <p className="text-[#F5F3FF] font-semibold">B.Sc. Computer Science</p>
          </div>

          <div className="bg-[#15131C] border border-white/10 rounded-2xl p-6">
            <p className="text-violet-400 text-sm font-medium mb-1">Focus</p>
            <p className="text-[#F5F3FF] font-semibold">AI and Full-stack development</p>
          </div>

          <div className="bg-[#15131C] border border-white/10 rounded-2xl p-6">
            <p className="text-violet-400 text-sm font-medium mb-1">Beyond Tech</p>
            <p className="text-[#F5F3FF] font-semibold">Modeling & Basketball</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About