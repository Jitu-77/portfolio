function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      
      {/* Logo */}
      <div className="text-xl font-bold">
        <span className="text-yellow-400">//</span>JP
      </div>

      {/* Menu */}
      <div className="flex gap-8 text-sm">
        <a href="#resume" className="hover:text-yellow-400">Resume</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
        <a href="#uses" className="hover:text-yellow-400">Uses</a>
      </div>

    </nav>
  );
}

export default Navbar;