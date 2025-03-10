import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#121212] shadow-lg py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 lg:px-20">
        <a href="/">
          <img src="/logo.svg" alt="Logo" width={80} height={80} />
        </a>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white text-lg">
          <li>
            <a href="#home" className="hover:text-gray-300 transition-all">Home</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-300 transition-all">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300 transition-all">Projects</a>
          </li>
        </ul>

        {/* Social Icons & Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#">
            <circle className="w-12 h-12 bg-[#353535]/50 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white hover:bg-gray-300 transition-all duration-300">
            <img src="/icons/linkedin-icon.svg" alt="LinkedIn Icon" width={18} height={18} />
            </circle>
          </a>
          <a href="#">
          <circle className="w-12 h-12 bg-[#353535]/50 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white hover:bg-gray-300 transition-all duration-300">
            <img src="/icons/facebook-icon.svg" alt="FaceBook Icon" width={18} height={18} />
            </circle>
          </a>
          <a href="#">
          <circle className="w-12 h-12 bg-[#353535]/50 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white hover:bg-gray-300 transition-all duration-300">
            <img src="/icons/instagram-icon.svg" alt="Instagram Icon" width={18} height={18} />
            </circle>
          </a>
          <a href="#connect" className="bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-gray-300 transition-all">
            Let’s Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#121212] text-white p-4 space-y-4 text-center">
          <a href="#home" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#skills" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Projects</a>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#">
              <img src="/icons/linkedin-icon.svg" alt="Icon1" width={24} height={24} />
            </a>
            <a href="#">
              <img src="/icons/facebook-icon.svg" alt="Icon2" width={24} height={24} />
            </a>
            <a href="#">
              <img src="/icons/instagram-icon.svg" alt="Icon3" width={24} height={24} />
            </a>
          </div>
          <a href="#connect" className="bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-gray-300 transition-all inline-block mt-4">
            Let’s Connect
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;