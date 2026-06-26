function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <p className="text-[#9CA3AF] text-sm text-center">
        © {new Date().getFullYear()} Jesutobi. Built with React & Tailwind CSS.
      </p>
    </footer>
  )
}

export default Footer