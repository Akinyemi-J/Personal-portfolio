function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[#F5F3FF] text-4xl font-bold mb-4">
          Let's <span className="text-violet-500">Connect</span>
        </h2>

        <p className="text-[#9CA3AF] mb-10">
          Got a project in mind, or just want to talk tech, basketball, or
          anything in between? My inbox is open.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:jesutobi14@gmail.com"
            className="bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/jesutobiloluwa-akinyemi-188976274/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-[#F5F3FF] font-semibold px-6 py-3 rounded-full hover:border-violet-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Akinyemi-J"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-[#F5F3FF] font-semibold px-6 py-3 rounded-full hover:border-violet-400 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;