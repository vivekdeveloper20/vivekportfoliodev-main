import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
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
            <span className="text-white">Work </span>
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A collection of my work experience and the roles I have taken in various organizations
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-400 to-cyan-500 h-full hidden lg:block"></div>

          {/* Experience Entries */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {/* Timeline Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-cyan-400 w-12 h-12 rounded-full flex justify-center items-center z-10 hidden lg:flex shadow-lg">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-8 h-8 object-cover rounded-full"
                  />
                </div>

                {/* Content Section */}
                <div
                  className={`w-full lg:max-w-md p-6 lg:p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 transform hover:scale-105 ${
                    index % 2 === 0 ? "lg:mr-auto lg:pr-16" : "lg:ml-auto lg:pl-16"
                  }`}
                >
                  {/* Header with Company Info */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-lg">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">
                        {experience.role}
                      </h3>
                      <h4 className="text-cyan-300 font-medium">
                        {experience.link ? (
                          <a href={experience.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-cyan-400">
                            {experience.company}
                          </a>
                        ) : (
                          experience.company
                        )}
                      </h4>
                      <p className="text-sm text-gray-400">{experience.date}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {experience.desc}
                  </p>

                  {/* Skills */}
                  <div>
                    <h5 className="font-semibold text-white mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-300 px-3 py-1 text-sm rounded-lg border border-cyan-400/30 hover:from-indigo-500/30 hover:to-cyan-500/30 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💼</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I&apos;m always open to new opportunities and excited to take on challenging projects 
              that allow me to grow and contribute to innovative solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
    </section>
  );
};

export default Experience;
