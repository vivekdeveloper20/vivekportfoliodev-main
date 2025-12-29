import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, duration = 2000, label, icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
        {count}+
      </div>
      <div className="text-xl md:text-2xl text-gray-300 font-semibold mb-2">{label}</div>
      <div className="text-4xl">{icon}</div>
    </div>
  );
};

const AnimatedStats = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">Journey in Numbers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A snapshot of my development career milestones and achievements
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Projects */}
          <div className="bg-gradient-to-br from-indigo-800/40 to-cyan-800/20 rounded-3xl p-8 border border-cyan-400/30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 transform">
            <Counter end={8} label="Projects Completed" icon="🚀" />
            <p className="text-center text-gray-400 text-sm mt-4">Full-stack & specialized solutions</p>
          </div>

          {/* Skills */}
          <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/20 rounded-3xl p-8 border border-purple-400/30 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 transform">
            <Counter end={25} label="Technical Skills" icon="🛠️" />
            <p className="text-center text-gray-400 text-sm mt-4">Languages & frameworks</p>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-orange-800/40 to-red-800/20 rounded-3xl p-8 border border-orange-400/30 shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 transform">
            <Counter end={6} label="Certifications" icon="🏆" />
            <p className="text-center text-gray-400 text-sm mt-4">Professional credentials</p>
          </div>

          {/* Open Source */}
          <div className="bg-gradient-to-br from-green-800/40 to-emerald-800/20 rounded-3xl p-8 border border-green-400/30 shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 transform">
            <Counter end={5} label="Platforms" icon="🌐" />
            <p className="text-center text-gray-400 text-sm mt-4">Active coding communities</p>
          </div>
        </div>

        {/* Achievement Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-white mb-3">Full Stack Development</h3>
            <p className="text-gray-400">Expert in MERN stack with production deployments on Vercel and modern cloud platforms</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
            <p className="text-gray-400">Active learner with certifications in Cybersecurity, UI/UX Design, and Cloud Computing</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-white mb-3">Community Contributor</h3>
            <p className="text-gray-400">Active on GitHub, LeetCode, HackerRank, and other platforms solving problems</p>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
    </section>
  );
};

export default AnimatedStats;
