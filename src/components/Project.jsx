import React, { useState } from 'react';
import { projects } from '../data/constants';
import ProjectCard from './cards/ProjectCard';

export default function Project() {
  const [selectedType, setSelectedType] = useState('web-app'); // default

  const filteredProjects = projects.filter(
    (project) => project.category === selectedType
  );

  return (
    <div id="projects" className="flex flex-col items-center justify-center py-20 text-white relative">
      <div className="w-full max-w-[1100px] text-center mb-8 px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h3>
        <p className="text-md md:text-lg text-gray-300">
        Showcasing real-world projects that highlight my skills and creativity.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setSelectedType('web-app')}
          className={`px-4 py-2 rounded-full cursor-pointer text-sm md:text-base ${
            selectedType === 'web-app' ? 'bg-white text-black' : 'bg-transparent text-[#854CE6] border-solid border-2 border-[#854CE6]'
          }`}
        >
          Web Applications
        </button>
        <button
          onClick={() => setSelectedType('client-site')}
          className={`px-4 py-2 rounded-full cursor-pointer text-sm md:text-base ${
            selectedType === 'client-site' ? 'bg-white text-black' : 'bg-transparent text-[#854CE6] border-solid border-2 border-[#854CE6]'
          }`}
        >
          Client Websites
        </button>
      </div>
      <div className="flex justify-center items-center gap-6 flex-wrap max-w-[1100px]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={`project${index}`} project={project} />
          ))
        ) : (
          <p className="text-gray-400">No projects available for this category.</p>
        )}
      </div>
    </div>
  );
}
