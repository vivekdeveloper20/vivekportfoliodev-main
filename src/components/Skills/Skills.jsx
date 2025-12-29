// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
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
          <span className="text-white">Skills & </span>
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          A comprehensive collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SkillsInfo.map((category, index) => (
          <div
            key={category.title}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">
                  {category.title === "Frontend" && "💻"}
                  {category.title === "Backend" && "🖥️"}
                  {category.title === "Languages" && "🧑‍💻"}
                  {category.title === "Tools" && "🛠️"}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>
            </div>

            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center space-y-2 bg-slate-700/30 border border-slate-600/50 rounded-xl py-4 px-3 text-center hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-indigo-500/10 hover:to-cyan-500/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm sm:text-base text-gray-300 group-hover:text-white font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      {/* Additional Skills Info */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Always Learning
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I&apos;m constantly expanding my skill set and staying updated with the latest technologies 
            to deliver the best solutions for modern web applications.
          </p>
        </div>
      </div>
    </div>

    {/* Section Divider */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
  </section>
);

export default Skills;
