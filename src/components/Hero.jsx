import profilePic from '../assets/profile-pic.jpg'
function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left side - Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-violet-400 font-medium mb-3">Hello, I'm</p>
          
          <h1 className="text-[#F5F3FF] text-5xl md:text-6xl font-bold mb-4">
            Akinyemi Jesutobi <span className="text-violet-500">.</span>
          </h1>

          <p className="text-[#9CA3AF] text-lg max-w-md mx-auto md:mx-0 mb-8">
            An Artifificial Intelligence enthusiast and full-stack developer who builds 
            intelligent, practical software and lives a pretty fun life outside the code too.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a 
              href="/Jesutobi_Resume.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              download="Jesutobi_Resume.pdf"
              className="bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90"
            >
              My Resume
            </a>
            <a href="#contact" className="border border-white/20 text-[#F5F3FF] font-semibold px-6 py-3 rounded-full hover:border-violet-400 inline-block text-center">
              Let's Connect
            </a>
          </div>
        </div>

        {/* Right side - Photo */}
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center">
            
            <img src={profilePic} alt="Akinyemi Jesutobi" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero