import React from 'react';
import { skills } from '../data/constants';
import { Tilt } from 'react-tilt';

export default function Skills() {
  return (
   <div id="skills" className="flex flex-col items-center justify-center py-20 text-white relative z-10">
  <div className="w-full max-w-[1100px] text-center mb-12 px-4">
    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills</h3>
    <p className="text-md md:text-lg text-gray-300">
      Here's a categorized view of my frontend development skills over the past 3+ years.
    </p>
  </div>

  <div className="w-full max-w-[1100px] flex flex-wrap justify-between gap-6 px-4">
  {skills.map((category, idx) => (
    <Tilt key={idx} className="w-full sm:w-[48%]">
      <div
        className="bg-[rgba(30,41,59,0.7)] border border-[rgba(255,255,255,0.08)] 
        shadow-[0_4px_24px_rgba(23,92,230,0.08)] rounded-2xl p-6 
        transition-all duration-300 hover:shadow-[0_6px_30px_rgba(23,92,230,0.2)]"
      >
        <h4 className="text-xl text-white font-semibold mb-4">{category.title}</h4>
        <div className="flex flex-wrap gap-4">
          {category.skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border border-[rgba(255,255,255,0.05)] 
              bg-[#1e293b] p-2 rounded-lg shadow-sm 
              hover:scale-105 transition-transform duration-300"
            >
              {skill.image ? (
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-6 h-6 object-contain"
                />
              ) : (
                <div className="w-8 h-8 flex items-center justify-center bg-pink-500 rounded-full text-white text-sm font-bold">
                  {skill.name[0]}
                </div>
              )}
              <p className="text-sm font-medium text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Tilt>
  ))}
</div>



</div>

  );
}
