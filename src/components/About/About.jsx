import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/vivekpics.png';
import { FaInstagram, FaLinkedin, FaXTwitter, FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa6';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-8 sm:pt-12 lg:pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
        {/* Left Side - Content */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col justify-center lg:pr-4">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-cyan-300 uppercase mb-1 sm:mb-2">Exploring Innovation & Code ✨</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hi, I'm <span className="inline-block">Vivek Kumar</span>
          </h1>
          <div className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent mb-2 min-h-12">
            <ReactTypingEffect
              text={[
                'Full Stack Developer',
                'App Developer',
                'Cybersecurity Enthusiast',
                'UI/UX Designer',
                'Tech Problem Solver',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={cursor => <span className="text-cyan-400 animate-pulse">{cursor}</span>}
              displayTextRenderer={(text, i) => (
                <span>{text}</span>
              )}
            />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Passionate developer and tech enthusiast. I create intuitive, scalable, and visually appealing digital experiences. I love turning ideas into seamless solutions that delight users.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-4 sm:mt-6">
            <a
              href="#work"
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-lg"
            >
              My Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1oZTwhH8bgkFqaJFaX-xkaDlq2RFYciXj/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-lg"
            >
              Download CV
            </a>
          </div>
          <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start mt-4 sm:mt-6">
            <a href="https://www.linkedin.com/in/vivekkr-gupta/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/60 hover:bg-cyan-500/20 text-cyan-300 p-2 sm:p-3 rounded-full transition-all duration-300 text-lg sm:text-xl"><FaLinkedin /></a>
            <a href="https://github.com/vivekdeveloper20" target="_blank" rel="noopener noreferrer" className="bg-slate-800/60 hover:bg-cyan-500/20 text-cyan-300 p-2 sm:p-3 rounded-full transition-all duration-300 text-lg sm:text-xl"><FaGithub /></a>
            <a href="https://x.com/VivekKumar2574" target="_blank" rel="noopener noreferrer" className="bg-slate-800/60 hover:bg-cyan-500/20 text-cyan-300 p-2 sm:p-3 rounded-full transition-all duration-300 text-lg sm:text-xl"><FaXTwitter /></a>
            <a href="https://www.youtube.com/@ovigupta524" target="_blank" rel="noopener noreferrer" className="bg-slate-800/60 hover:bg-cyan-500/20 text-cyan-300 p-2 sm:p-3 rounded-full transition-all duration-300 text-lg sm:text-xl"><FaYoutube /></a>
          </div>
          
          {/* Scrolling Skills & Interests Ribbon */}
          <div className="overflow-hidden w-full mt-6 sm:mt-8">
            <div className="whitespace-nowrap animate-marquee text-cyan-200 text-xs sm:text-base md:text-lg font-semibold tracking-wide opacity-90">
              <span className="mx-8">Software Development</span>
              <span className="mx-8">Cybersecurity</span>
              <span className="mx-8">Web Design</span>
              <span className="mx-8">Problem-Solving</span>
              <span className="mx-8">UI/UX</span>
              <span className="mx-8">Cloud Computing</span>
              <span className="mx-8">Open Source</span>
              <span className="mx-8">Machine Learning</span>
              <span className="mx-8">DevOps</span>
              <span className="mx-8">Teamwork</span>
              <span className="mx-8">Software Development</span>
              <span className="mx-8">Cybersecurity</span>
              <span className="mx-8">Web Design</span>
              <span className="mx-8">Problem-Solving</span>
              <span className="mx-8">UI/UX</span>
              <span className="mx-8">Cloud Computing</span>
              <span className="mx-8">Open Source</span>
              <span className="mx-8">Machine Learning</span>
              <span className="mx-8">DevOps</span>
              <span className="mx-8">Teamwork</span>
            </div>
          </div>
        </div>
        {/* Right Side - Profile Image with Multiple Concentric Circles */}
        <div className="flex justify-center lg:justify-center relative mt-8 sm:mt-12 lg:mt-0 lg:translate-x-[10px]">
          {/* Background Glow Effect */}
          <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-br from-indigo-500/30 via-cyan-400/20 to-sky-400/10 rounded-3xl blur-2xl z-0"></div>
          
          {/* Concentric Circles Container */}
          <div className="relative flex items-center justify-center">
            {/* Outer Ring - Animated Gradient */}
            <div className="absolute w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-sky-400 opacity-20 animate-spin-slow"></div>
            
            {/* Second Ring - Pulsing Effect */}
            <div className="absolute w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 opacity-30 animate-enhanced-pulse"></div>
            
            {/* Third Ring - Rotating Gradient */}
            <div className="absolute w-52 sm:w-72 h-52 sm:h-72 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-400 opacity-25 animate-spin-reverse"></div>
            
            {/* Fourth Ring - Glowing Effect */}
            <div className="absolute w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-sky-400 opacity-20 animate-ping"></div>
            
            {/* Fifth Ring - Subtle Glow */}
            <div className="absolute w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 opacity-15"></div>
            
            {/* Profile Image Container */}
            <Tilt
              className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border-4 border-cyan-400/60 rounded-full shadow-2xl shadow-cyan-500/30 bg-slate-900 z-10 flex items-center justify-center backdrop-blur-sm"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Vivek Kumar"
                className="w-full h-full object-cover rounded-full"
              />
              
              {/* Inner Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-sky-400/20 to-indigo-400/20 animate-pulse"></div>
              
              {/* Rotating Tech Icons Around Profile */}
              <div className="flex absolute w-5 h-5 sm:w-8 sm:h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-orbit-1 shadow-lg border-2 border-white/20">
                <span>⚛️</span>
              </div>
              <div className="flex absolute w-5 h-5 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-orbit-2 shadow-lg border-2 border-white/20">
                <span>🔒</span>
              </div>
              <div className="flex absolute w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-orbit-3 shadow-lg border-2 border-white/20">
                <span>⚡</span>
              </div>
              <div className="flex absolute w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-orbit-4 shadow-lg border-2 border-white/20">
                <span>🎨</span>
              </div>
              <div className="flex absolute w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-orbit-5 shadow-lg border-2 border-white/20">
                <span>🚀</span>
              </div>
              <div className="flex absolute w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-orbit-6 shadow-lg border-2 border-white/20">
                <span>💻</span>
              </div>
              <div className="flex absolute w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-orbit-7 shadow-lg border-2 border-white/20">
                <span>🌐</span>
              </div>
              <div className="flex absolute w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-orbit-8 shadow-lg border-2 border-white/20">
                <span>🔧</span>
              </div>
              <div className="flex absolute w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-orbit-9 shadow-lg border-2 border-white/20">
                <span>📱</span>
              </div>
              <div className="flex absolute w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-orbit-10 shadow-lg border-2 border-white/20">
                <span>⚙️</span>
              </div>
              <div className="flex absolute w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-orbit-11 shadow-lg border-2 border-white/20">
                <span>🎯</span>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
