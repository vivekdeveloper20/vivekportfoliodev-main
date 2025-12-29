import React from "react";
import { FaGithub, FaCode, FaHackerrank, FaLink, FaMedal } from 'react-icons/fa6';

const courseraLogo = (
  <svg viewBox="0 0 40 40" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="20" fill="#2A73CC"/>
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" fontFamily="Arial" dy=".3em">C</text>
  </svg>
);
const eccouncilLogo = (
  <svg viewBox="0 0 40 40" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="20" fill="#D6001C"/>
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial" dy=".3em">EC</text>
  </svg>
);
const cipherLogo = (
  <svg viewBox="0 0 40 40" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="20" fill="#0EA5E9"/>
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="Arial" dy=".3em">Cipher</text>
  </svg>
);
const googleLogo = (
  <svg viewBox="0 0 40 40" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="20" fill="#34A853"/>
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="Arial" dy=".3em">G</text>
  </svg>
);
const udemyLogo = (
  <svg viewBox="0 0 40 40" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="20" fill="#A435F0"/>
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="Arial" dy=".3em">U</text>
  </svg>
);
const nptelLogo = (
  <svg viewBox="0 0 40 40" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="20" fill="#FF6F00"/>
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="Arial" dy=".3em">NPTEL</text>
  </svg>
);

const certifications = [
  {
    id: 1,
    title: "Programming in C++: A Hands-on Introduction",
    issuer: "Coursera",
    date: "Oct 2023",
    desc: "Learned C++ programming with practical projects and hands-on coding.",
    link: "https://drive.google.com/file/d/1CrXs2PGrE8kTOIX0E0davrm7hgX_7MN6/view?usp=sharing",
    icon: courseraLogo,
    iconBg: "bg-transparent"
  },
  {
    id: 2,
    title: "Data Structures & Algorithms Training",
    issuer: "CipherSchools, India",
    date: "Jan 2025 - Feb 2025",
    desc: "Completed DSA training and earned certificate of completion.",
    link: "https://drive.google.com/file/d/1TZcpNiDwqHCmqSJxRJ4RBqJGD1DbzNUv/view?usp=sharing",
    icon: cipherLogo,
    iconBg: "bg-transparent"
  },
  {
    id: 3,
    title: "UI/UX Design Specialization",
    issuer: "Google",
    date: "Jan 2024",
    desc: "Focused on design thinking, prototyping, and Figma workflows.",
    link: "https://drive.google.com/file/d/1EaEmaDnNaz2QbTT6V1V1K7Fv-Hr_Q7ql/view?usp=sharing",
    icon: googleLogo,
    iconBg: "bg-transparent"
  },
  {
    id: 4,
    title: "Computer Networks and Internet Protocol",
    issuer: "NPTEL",
    date: "2024",
    desc: "Covered network layers, routing, TCP/IP, and internet protocols with assignments.",
    link: "https://your-nptel-cn-ip-certificate-link.com",
    icon: nptelLogo,
    iconBg: "bg-transparent"
  },
  {
    id: 5,
    title: "Python for Everybody",
    issuer: "Coursera",
    date: "Feb 2024",
    desc: "Completed foundational and advanced Python programming concepts, including data structures and web access.",
    link: "https://your-python-certificate-link.com",
    icon: courseraLogo,
    iconBg: "bg-transparent"
  },
  {
    id: 6,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2024",
    desc: "Learned cloud models, virtualization, distributed systems, and deployment concepts.",
    link: "https://drive.google.com/file/d/17b_cn9VdgNbIqYFMCt8e8_QpLXLoqy66/view?usp=sharing",
    icon: nptelLogo,
    iconBg: "bg-transparent"
  },
];

const achievements = [
  {
    id: 1,
    title: "Hackathon Winner",
    org: "CodeFest 2023",
    date: "2023",
    icon: "🏆",
    desc: "Secured 1st place for building an innovative web app in 24 hours."
  },
  {
    id: 2,
    title: "Top 1% in LeetCode Weekly Contest",
    org: "LeetCode",
    date: "2024",
    icon: "🥇",
    desc: "Ranked in the top 1% globally in a LeetCode coding contest."
  }
];

const openSourceContributions = [
  {
    id: 1,
    name: 'GitHub',
    icon: <FaGithub className="text-3xl text-white" />,
    desc: 'Contributed to open source projects, bug fixes, and documentation.',
    link: 'https://github.com/vivekdeveloper20',
  },
  {
    id: 2,
    name: 'LeetCode',
    icon: <FaCode className="text-3xl text-yellow-400" />,
    desc: 'Solved 500+ coding problems, participated in contests, and shared solutions.',
    link: 'https://leetcode.com/u/vivcode1/',
  },
  {
    id: 3,
    name: 'GeeksforGeeks',
    icon: <FaCode className="text-3xl text-green-400" />,
    desc: 'Active contributor, wrote articles and solved DSA problems.',
    link: 'https://auth.geeksforgeeks.org/user/your-gfg-username',
  },
  {
    id: 4,
    name: 'HackerRank',
    icon: <FaHackerrank className="text-3xl text-green-500" />,
    desc: 'Earned multiple badges in problem solving, algorithms, and more.',
    link: 'https://www.hackerrank.com/profile/vivekkumar05',
  },
  {
    id: 5,
    name: 'TryHackMe',
    icon: <FaCode className="text-3xl text-cyan-400" />,
    desc: 'Completed cybersecurity labs and challenges, improved practical skills.',
    link: 'https://tryhackme.com/p/vivek01',
  },
];

const ngoContributions = [
  {
    id: 1,
    name: 'Helping Hands NGO',
    icon: <FaMedal className="text-3xl text-cyan-400" />,
    desc: 'Volunteered for educational and social initiatives, helped underprivileged children.',
    certificate: 'https://drive.google.com/file/d/1OY9s5GLlJ_ARb9N7k3QBR2nP9nbGsA4i/view?usp=sharing',
  },
  {
    id: 2,
    name: 'National Service Scheme (NSS)',
    icon: <FaMedal className="text-3xl text-indigo-400" />,
    desc: 'Participated in social service, awareness campaigns, and community projects.',
    certificate: 'https://your-nss-certificate-link.com',
  },
];

const Contributions = () => (
  <section
    id="contributions"
    className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl animate-ping"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">Contributions</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Explore my open source, coding, and social service contributions.
        </p>
      </div>
      {/* Open Source Contributions */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-cyan-300 mb-6">Open Source & Coding Platforms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {openSourceContributions.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-indigo-800/60 to-cyan-800/40 rounded-2xl p-8 border border-cyan-400/30 shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-3">{item.icon}</div>
              <h4 className="text-lg font-bold text-white mb-1">{item.name}</h4>
              <p className="text-gray-300 text-sm mb-2">{item.desc}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-semibold transition-colors duration-200">
                <FaLink className="inline-block" /> Visit Profile
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* NGO/NSS Contributions */}
      <div>
        <h3 className="text-2xl font-bold text-cyan-300 mb-6">NGO & Social Service</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ngoContributions.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-cyan-800/60 to-indigo-800/40 rounded-2xl p-8 border border-cyan-400/30 shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-3">{item.icon}</div>
              <h4 className="text-lg font-bold text-white mb-1">{item.name}</h4>
              <p className="text-gray-300 text-sm mb-2">{item.desc}</p>
              {item.certificate && (
                <a href={item.certificate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-semibold transition-colors duration-200">
                  <FaMedal className="inline-block text-cyan-400" /> View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
  </section>
);

const Certifications = () => (
  <section
    id="certifications"
    className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl animate-ping"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">Certifications & Achievements</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          A showcase of my professional certifications and notable achievements.
        </p>
      </div>
      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-gradient-to-br from-indigo-800/60 to-cyan-800/40 rounded-2xl p-8 border border-cyan-400/30 shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-start relative"
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white">{cert.title}</h3>
              <span className={`w-9 h-9 rounded-full flex items-center justify-center shadow ring-2 ring-slate-900 ${cert.iconBg}`} title={cert.issuer}>
                {cert.icon}
              </span>
            </div>
            <div className="text-cyan-300 font-medium mb-1">{cert.issuer} | {cert.date}</div>
            <p className="text-gray-300 text-sm mb-4">{cert.desc}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-semibold transition-colors duration-200 border border-cyan-400 px-4 py-2 rounded-lg mt-auto">
              Verify Certificate
            </a>
          </div>
        ))}
      </div>
      {/* Achievements Grid */}
      <div>
        <h3 className="text-2xl font-bold text-cyan-300 mb-6">Achievements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="bg-gradient-to-br from-indigo-800/60 to-cyan-800/40 rounded-2xl p-8 border border-cyan-400/30 shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{ach.icon}</div>
              <h4 className="text-lg font-bold text-white mb-1">{ach.title}</h4>
              <div className="text-cyan-300 font-medium mb-1">{ach.org} | {ach.date}</div>
              <p className="text-gray-300 text-sm">{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
  </section>
);

export default Certifications;
export { Contributions }; 