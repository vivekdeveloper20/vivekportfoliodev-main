import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Certifications, { Contributions } from "./components/Education/Certifications";
import AnimatedStats from "./components/Stats/AnimatedStats";
import CommandPalette from "./components/CommandPalette/CommandPalette";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import Blog from "./components/Blog/Blog";
import SocialShare from "./components/SocialShare/SocialShare";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 min-h-screen">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <AnimatedBackground />
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <AnimatedStats />
        <Skills />
        <Experience />
        <Work />
        <Certifications />
        <Contributions />
        <Education />
        <Blog />
        <Contact />
        <Footer />
        <CommandPalette />
        <SocialShare variant="floating" />
      </div>
    </div>
  );
};

export default App;



