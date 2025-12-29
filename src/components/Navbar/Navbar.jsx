import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function with proper offset
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  // Scroll to top function
  const handleLogoClick = () => {
    setActiveSection("");
    setIsOpen(false);
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "certifications", label: "Certifications" }, // Moved before Education
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-cyan-500/20" 
          : "bg-slate-900/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white py-3 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-lg font-bold cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={handleLogoClick}
          >
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">Vivek</span>
            <span className="text-indigo-400">/</span>
            <span className="text-white">Kumar</span>
            <span className="text-cyan-400">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                  activeSection === item.id ? "text-cyan-400 font-semibold" : ""
                }`}
              >
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className="relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons + Cybersecurity CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/vivekdeveloper20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vivekkr-gupta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://your-cyber-portfolio-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 border border-cyan-400/60 shadow-sm"
            >
              <span role="img" aria-label="cyber">🛡️</span>
              <span>Cybersecurity</span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-2xl text-cyan-400 cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-2xl text-indigo-400 cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg md:hidden animate-slide-down">
            <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.id ? "text-cyan-400 font-semibold" : ""
                  }`}
                >
                  <button 
                    onClick={() => handleMenuItemClick(item.id)}
                    className="py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-cyan-500/10 transition-all duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="w-full px-6 pt-2">
                <a
                  href="https://your-cyber-portfolio-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 border border-cyan-400/60"
                >
                  🛡️ Cybersecurity Portfolio
                </a>
              </li>
              <div className="flex space-x-6 pt-4 border-t border-gray-700">
                <a
                  href="https://github.com/vivekdeveloper20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vivekkr-gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
