function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0B0A0F]/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo / Name */}
        <div className="text-[#F5F3FF] text-xl font-bold">
          JT<span className="text-violet-500">.</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-[#9CA3AF] text-sm font-medium">
          <li><a href="#home" className="hover:text-violet-400">Home</a></li>
          <li><a href="#about" className="hover:text-violet-400">About</a></li>
          <li><a href="#skills" className="hover:text-violet-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-violet-400">Projects</a></li>
          <li><a href="#beyond" className="hover:text-violet-400">Beyond the Code</a></li>
      </ul>

        {/* CTA Button */}
        <a href="#contact" className="bg-gradient-to-r from-violet-500 to-pink-500 text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90">
          Contact
        </a>

      </div>
    </nav>
  )
}

export default Navbar