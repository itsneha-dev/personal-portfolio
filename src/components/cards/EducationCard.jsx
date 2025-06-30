import React from 'react'
import {VerticalTimelineElement } from 'react-vertical-timeline-component'
import ProjectCard from './ProjectCard';

export default function EducationCard({ education }) {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src={education.img}
          alt={education.img}
        />
      }
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0 4px 24px rgba(23, 92, 230, 0.15)",
        backgroundColor: "rgba(17,25,40,0.83)",
        border: "1px solid rgba(255,255,255,0.125)",
        borderRadius: "12px",
        padding: "24px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255,255,255, 0.3)",
      }}
      date={<span className="text-sm md:text-base text-gray-400">{education.date}</span>}
    >
      <div className="flex flex-col md:flex-row gap-4 text-left">
        <img
          className="h-16 w-16 md:h-15 md:w-15 rounded-xl object-contain border border-gray-700"
          src={education.img}
          alt={education.img}
        />
        <div className="flex flex-col">
          <div className="text-lg md:text-lg font-semibold text-gray-400">{education.college}</div>
          <div className="text-md md:text-md text-gray-400">{education.degree}</div>
           <div className='text-sm'>{education.date}</div>
           </div>
            </div>

          {education?.grade&& (
            <div className="mt-3 flex flex-wrap gap-2 items-center">
              <span className="font-semibold text-sm text-gray-300">Grade:</span>
                   {education.grade}
            </div>
          )}
           {education.desc && (
            <p className="mt-2 text-sm md:text-base text-left text-gray-400">{education.desc}</p>
          )}

    </VerticalTimelineElement>
  );
}



