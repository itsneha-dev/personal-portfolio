import React from 'react'
import {VerticalTimelineElement } from 'react-vertical-timeline-component'

export default function ExperienceCard({ experience }) {
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
          src={experience.img}
          alt={experience.img}
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
      date={<span className="text-sm md:text-base text-gray-400">{experience.date}</span>}
    >
      <div className="flex flex-col md:flex-row gap-4 text-left">
        <img
          className="h-16 w-16 md:h-20 md:w-20 rounded-xl object-contain border border-gray-700"
          src={experience.img}
          alt={experience.img}
        />
        <div className="flex flex-col">
          <div className="text-lg md:text-xl font-bold text-gray-100">{experience.role}</div>
          <div className="text-md md:text-lg text-gray-400">{experience.company}</div>
           <div className=''>{experience.date}</div>
           </div>
            </div>

          {experience.desc && (
            <p className="mt-2 text-sm md:text-base text-left text-gray-400">{experience.desc}</p>
          )}

          {experience.skills?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2 items-center">
              <span className="font-semibold text-sm text-gray-300">Skills:</span>
              {experience.skills.map((skill, index) => (
                <span
                  key={`skill-${index}`}
                  className="text-xs md:text-sm text-white rounded-full shadow-sm"
                >
                  . {skill}
                </span>
              ))}
            </div>
          )}
       
    </VerticalTimelineElement>
  );
}

