import { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
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
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 overflow-hidden cursor-pointer transform hover:scale-105 group"
            >
              <div className="p-4">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-300 px-3 py-1 text-xs rounded-lg border border-cyan-400/30 hover:from-indigo-500/30 hover:to-cyan-500/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I&apos;m constantly working on new projects and learning new technologies. 
              Check back soon for more exciting work!
            </p>
          </div>
        </div>
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 sm:p-4">
          <div className="relative bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto overflow-hidden border border-slate-700/50 flex flex-col items-center justify-center">
            {/* Close Button - Always visible, top right, large and touch-friendly */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 text-white text-4xl font-extrabold hover:text-cyan-400 transition-colors duration-300 bg-black/60 rounded-full w-12 h-12 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-xl cursor-pointer border-2 border-cyan-400"
              aria-label="Close modal"
              style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.4)' }}
            >
              &times;
            </button>
            <div className="flex flex-col w-full items-center justify-center">
              <div className="w-full flex justify-center bg-slate-800/50 px-4 py-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-w-xs sm:max-w-md md:max-w-lg object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-4 sm:p-8 w-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed text-center">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-300 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-lg border border-cyan-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-800 hover:bg-cyan-600 text-gray-300 hover:text-white px-6 py-3 rounded-lg text-center font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="mr-2">📄</span>
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-indigo-700 hover:from-cyan-700 hover:to-indigo-800 text-white px-6 py-3 rounded-lg text-center font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="mr-2">🌐</span>
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
    </section>
  );
};

export default Work;
