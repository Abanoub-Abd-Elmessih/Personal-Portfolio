export const Navbar = () => {
  return (
    <nav className="fixed top-4 inset-x-0 mx-auto w-fit z-50">
      <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
        {/* Navigation Links */}
        <div className="flex items-center gap-6 flex-wrap text-center">
          <a
            href="#home"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
