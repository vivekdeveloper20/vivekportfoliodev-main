import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp, FaShareAlt, FaCopy, FaCheck } from 'react-icons/fa';

const SocialShare = ({ variant = 'default' }) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const portfolioUrl = window.location.href;
  const linkedInText = `🚀 Portfolio Recommendation

Sharing the portfolio of Vivek Kumar, a motivated and detail-oriented Software Engineer with strong hands-on experience in building modern, scalable, and production-ready web applications.

His work demonstrates expertise in:

✅ Building production-grade applications using React.js and Node.js

✅ Applying clean architecture, RESTful APIs, and scalable system design principles

✅ End-to-end development, including debugging, performance optimization, and reliability

✅ Writing secure, maintainable code with a strong focus on real-world problem solving

✅ Delivering responsive, user-centric UI/UX, emphasizing usability and accessibility

✅ Working effectively with Git workflows, collaborative development, and modern deployment practices

The portfolio highlights well-structured real-world projects, clean code organization, and a solid understanding of end-to-end software engineering.

📌 A strong profile worth exploring for software engineering opportunities.

Portfolio: ${portfolioUrl}

#SoftwareEngineer #FullStackDeveloper #React #NodeJS #WebDevelopment #PortfolioShowcase`;
  
  const shareText = "Check out Vivek Kumar's impressive portfolio - A Full Stack Developer with expertise in React, Node.js, and modern web technologies.";

  const shareLinks = {
    linkedin: `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(linkedInText)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(portfolioUrl)}&text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(portfolioUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + portfolioUrl)}`,
  };

  const handleShare = (platform) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(portfolioUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Floating Action Button Variant
  if (variant === 'floating') {
    return (
      <div className="fixed bottom-6 left-6 z-40">
        <div className="relative">
          {/* Share Options Menu */}
          {showShareMenu && (
            <div className="absolute bottom-16 left-0 bg-slate-800/95 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50 shadow-2xl mb-2 animate-slideUp">
              <div className="flex flex-col gap-2 min-w-[140px]">
                <button
                  onClick={() => handleShare('linkedin')}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-600/30 text-white transition-all duration-300 hover:scale-105"
                >
                  <FaLinkedin className="text-xl text-blue-500" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sky-500/30 text-white transition-all duration-300 hover:scale-105"
                >
                  <FaTwitter className="text-xl text-sky-400" />
                  <span className="text-sm font-medium">Twitter</span>
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-700/30 text-white transition-all duration-300 hover:scale-105"
                >
                  <FaFacebook className="text-xl text-blue-600" />
                  <span className="text-sm font-medium">Facebook</span>
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-green-500/30 text-white transition-all duration-300 hover:scale-105"
                >
                  <FaWhatsapp className="text-xl text-green-500" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </button>
                <div className="border-t border-slate-700/50 my-1"></div>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-500/20 text-white transition-all duration-300 hover:scale-105"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-xl text-green-400" />
                      <span className="text-sm font-medium text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="text-xl text-purple-400" />
                      <span className="text-sm font-medium">Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Main Share Button */}
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="group w-14 h-14 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center transform hover:scale-110"
            aria-label="Share Portfolio"
          >
            <FaShareAlt className={`text-white text-xl transition-transform duration-300 ${showShareMenu ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    );
  }

  // Inline Variant (for sections)
  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-300 text-sm font-medium">Share:</span>
      <div className="flex gap-2">
        <button
          onClick={() => handleShare('linkedin')}
          className="w-10 h-10 rounded-full bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/70 hover:border-blue-400 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin className="text-blue-400 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={() => handleShare('twitter')}
          className="w-10 h-10 rounded-full bg-sky-500/30 hover:bg-sky-500/50 border border-sky-500/70 hover:border-sky-400 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Share on Twitter"
        >
          <FaTwitter className="text-sky-400 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={() => handleShare('facebook')}
          className="w-10 h-10 rounded-full bg-blue-700/30 hover:bg-blue-700/50 border border-blue-600/70 hover:border-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Share on Facebook"
        >
          <FaFacebook className="text-blue-500 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={() => handleShare('whatsapp')}
          className="w-10 h-10 rounded-full bg-green-600/30 hover:bg-green-600/50 border border-green-500/70 hover:border-green-400 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="text-green-400 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={handleCopyLink}
          className="w-10 h-10 rounded-full bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/70 hover:border-purple-400 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Copy Link"
        >
          {copied ? (
            <FaCheck className="text-green-400 group-hover:scale-110 transition-transform" />
          ) : (
            <FaCopy className="text-purple-400 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
