import React from 'react'
import davim from "../../assets/davim.jpg"

export default function ProjectCard({project}) {
return (
  <div className="w-[330px] h-[500px] bg-[#1f1f2a]/80 rounded-xl shadow-md p-4 overflow-hidden cursor-pointer flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:brightness-110">
    <div className="h-36 w-full overflow-hidden rounded-lg shadow">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-between flex-grow mt-4">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tags.map((tag, index) => (
          <span
            key={`tag${index}`}
            className="flex text-sm items-center gap-2 border border-[rgba(255,255,255,0.05)] 
              bg-[#1e293b] p-2 rounded-lg shadow-sm 
              hover:scale-105 transition-transform duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title + Description */}
      <div className="mt-3 flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <span className="text-sm text-gray-400">{project.date}</span>
        <p className="text-sm text-gray-300 mt-1 line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-4">
        <a
          href={project.webapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          View Live
        </a>
      </div>
    </div>
  </div>
);


}
