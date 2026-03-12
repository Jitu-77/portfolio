function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">

      <div className="max-w-4xl mx-auto px-8 py-6 flex justify-between text-sm text-gray-400">

        <p>© 2026 Built with ❤️</p>

        <div className="flex gap-6">
          <a href="#uses" className="hover:text-yellow-400">
            Uses
          </a>

          <a href="#resume" className="hover:text-yellow-400">
            Resume
          </a>

          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;