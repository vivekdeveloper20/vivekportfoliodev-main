import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-10 w-20 h-20 bg-cyan-400 rounded-full blur-2xl motion-safe:animate-pulse"></div>
        <div className="absolute bottom-5 right-10 w-16 h-16 bg-indigo-500 rounded-full blur-2xl motion-safe:animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          {/* Name / Logo */}
          <h2 className="text-xl font-bold text-white mb-2">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">Vivek</span>
            <span className="text-indigo-400">/</span>
            <span className="text-white">Kumar</span>
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-gray-300 text-sm mb-4">Full Stack Developer & Tech Enthusiast</p>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center space-y-3 mb-4">
            <div className="flex justify-center space-x-4">
            {[
              { icon: <FaGithub size={20} />, link: "https://github.com/vivekdeveloper20", label: "GitHub" },
              { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/vivekkumar56/", label: "LinkedIn" },
              { icon: <FaInstagram size={20} />, link: "", label: "Instagram" },
              { icon: <FaYoutube size={20} />, link: "https://www.youtube.com/@ovigupta524", label: "YouTube" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 p-3 sm:p-2 rounded-full bg-slate-800/50 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-indigo-500/10 border border-slate-700/50 hover:border-cyan-400/30"
                title={item.label}
              >
                {item.icon}
              </a>
            ))}
            </div>

            {/* CV Button */}
            <div>
              {/* The PDF should be placed in the public folder at /Vivek_Kumar_CV.pdf */}
              <a
                href="https://drive.google.com/file/d/1oZTwhH8bgkFqaJFaX-xkaDlq2RFYciXj/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:inline-flex items-center justify-center px-4 py-3 sm:py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-sm font-medium rounded-md shadow-sm hover:scale-105 transition-transform duration-200"
                title="Open CV"
              >
                View CV
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mb-4 rounded-full"></div>

          {/* Copyright Text */}
          <div className="space-y-1">
            <p className="text-gray-400 text-xs">
              © 2025 Vivek Kumar. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;
