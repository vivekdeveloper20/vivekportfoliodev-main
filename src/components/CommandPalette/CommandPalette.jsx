import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiX, FiMic, FiMicOff } from 'react-icons/fi';

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [listening, setListening] = useState(false);
  const [muted, setMuted] = useState(true); // default muted: user must unmute
  const recognitionRef = useRef(null);

  const commands = [
    {
      id: 1,
      name: 'Go to About',
      category: 'Navigation',
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
      shortcut: 'G A'
    },
    {
      id: 2,
      name: 'Go to Skills',
      category: 'Navigation',
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
      shortcut: 'G S'
    },
    {
      id: 3,
      name: 'Go to Projects',
      category: 'Navigation',
      action: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
      shortcut: 'G P'
    },
    {
      id: 4,
      name: 'Go to Experience',
      category: 'Navigation',
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
      shortcut: 'G E'
    },
    {
      id: 5,
      name: 'Go to Certifications',
      category: 'Navigation',
      action: () => {
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
      shortcut: 'G C'
    },
    {
      id: 6,
      name: 'Go to Contact',
      category: 'Navigation',
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
      shortcut: 'G C'
    },
    {
      id: 7,
      name: 'Copy Email',
      category: 'Actions',
      action: () => {
        navigator.clipboard.writeText('vivekkumarlpu1@gmail.com');
        setOpen(false);
        alert('Email copied to clipboard!');
      },
      shortcut: 'C E'
    },
    {
      id: 8,
      name: 'Open GitHub',
      category: 'Links',
      action: () => {
        window.open('https://github.com/vivekdeveloper20', '_blank');
        setOpen(false);
      },
      shortcut: 'O G'
    },
    {
      id: 9,
      name: 'Open LinkedIn',
      category: 'Links',
      action: () => {
        window.open('https://www.linkedin.com/in/vivekkr-gupta/', '_blank');
        setOpen(false);
      },
      shortcut: 'O L'
    },
    {
      id: 10,
      name: 'Scroll to Top',
      category: 'Actions',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setOpen(false);
      },
      shortcut: 'H'
    }
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Setup Web Speech API (voice commands)
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(r => r[0].transcript)
        .join(' ')
        .toLowerCase();
      handleVoiceCommand(transcript);
    };
    recognition.onend = () => {
      setListening(false);
      setMuted(true); // auto-return to muted after each session
    };
    recognition.onerror = () => {
      setListening(false);
      setMuted(true);
    };

    recognitionRef.current = recognition;
  }, []);

  const handleVoiceCommand = (text) => {
    const t = text.trim();
    // Open palette on any voice interaction for visual feedback
    setOpen(true);

    // Quick search intent
    const searchMatch = t.match(/^search (.+)$/);
    if (searchMatch) {
      setSearch(searchMatch[1]);
      return;
    }

    const mapPhrases = [
      { kws: ['about'], action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
      { kws: ['skill', 'skills'], action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
      { kws: ['project', 'projects', 'work'], action: () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) },
      { kws: ['experience'], action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
      { kws: ['certification', 'certifications'], action: () => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' }) },
      { kws: ['contact', 'message'], action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
      { kws: ['top', 'home'], action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
      { kws: ['copy email', 'email'], action: () => navigator.clipboard.writeText('vivekkumarlpu1@gmail.com') },
      { kws: ['github'], action: () => window.open('https://github.com/vivekdeveloper20', '_blank') },
      { kws: ['linkedin'], action: () => window.open('https://www.linkedin.com/in/vivekkr-gupta/', '_blank') },
    ];

    for (const item of mapPhrases) {
      if (item.kws.some(k => t.includes(k))) {
        item.action();
        setOpen(false);
        setSearch('');
        return;
      }
    }

    // Fallback: feed text into search
    setSearch(t);
  };

  const handleMicClick = () => {
    const recognition = recognitionRef.current;
    if (!recognition) {
      alert('Voice recognition not supported on this browser.');
      return;
    }

    // If muted, unmute and start listening immediately
    if (muted) {
      setMuted(false);
      try {
        setListening(true);
        recognition.start();
      } catch (_) {
        setListening(false);
        setMuted(true);
      }
      return;
    }

    // If already unmuted, toggle listening
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      try {
        setListening(true);
        recognition.start();
      } catch (_) {
        setListening(false);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K or Ctrl+K to open
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(!open);
        setSearch('');
      }

      // Escape to close
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end gap-2">
        <button
          onClick={handleMicClick}
          className={`bg-gradient-to-r text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm font-semibold
            ${muted
              ? 'from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400'
              : listening
                ? 'from-fuchsia-600 to-cyan-600 ring-2 ring-cyan-300 animate-pulse'
                : 'from-fuchsia-600 to-cyan-600 hover:from-fuchsia-700 hover:to-cyan-700 hover:shadow-cyan-500/40'}`}
          title={muted ? 'Unmute mic to speak' : (listening ? 'Listening… click to stop' : 'Click to speak')}
        >
          {muted ? <FiMicOff className="w-4 h-4" /> : <FiMic className="w-4 h-4" />}
          <span className="hidden sm:inline">{muted ? 'Unmute' : (listening ? 'Listening' : 'Voice')}</span>
        </button>
        <button
          onClick={() => setOpen(!open)}
          className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm font-semibold"
        >
          <FiSearch className="w-4 h-4" />
          <span className="hidden sm:inline">Cmd+K</span>
        </button>
      </div>

      {/* Command Palette Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pt-0 sm:pt-20 px-3 sm:px-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-2xl border border-slate-700 overflow-hidden max-h-[90vh] sm:max-h-auto flex flex-col">
            {/* Search Input */}
            <div className="border-b border-slate-700 px-3 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
              <FiSearch className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 flex-shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Search commands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm sm:text-lg"
              />
              <button
                onClick={() => setOpen(false)}
                className="p-1 hover:bg-slate-800 rounded transition-colors flex-shrink-0"
              >
                <FiX className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
              </button>
            </div>

            {/* Commands List */}
            <div className="max-h-48 sm:max-h-96 overflow-y-auto flex-1">
              {filteredCommands.length > 0 ? (
                <div>
                  {/* Group by Category */}
                  {['Navigation', 'Actions', 'Links'].map(category => {
                    const categoryCommands = filteredCommands.filter(cmd => cmd.category === category);
                    if (categoryCommands.length === 0) return null;

                    return (
                      <div key={category}>
                        <div className="px-3 sm:px-6 py-2 sm:py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-slate-800/50">
                          {category}
                        </div>
                        {categoryCommands.map(cmd => (
                          <button
                            key={cmd.id}
                            onClick={cmd.action}
                            className="w-full px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between hover:bg-slate-800 transition-colors text-left group"
                          >
                            <span className="text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                              {cmd.name}
                            </span>
                            <span className="text-xs text-gray-500 group-hover:text-gray-400">
                              {cmd.shortcut}
                            </span>
                          </button>
                        ))}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="px-6 py-12 text-center">
                  <p className="text-gray-400">No commands found</p>
                </div>
              )}
            </div>

            {/* Footer Info */}
            <div className="border-t border-slate-700 px-3 sm:px-6 py-2 sm:py-3 text-xs text-gray-500 bg-slate-800/50">
              <p>
                💡 Tip: Press <kbd className="bg-slate-700 px-2 py-1 rounded text-gray-300">ESC</kbd> to close • Mic is <span className="text-rose-300">muted</span> by default — tap <span className="text-cyan-300">Unmute</span> to speak
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandPalette;
