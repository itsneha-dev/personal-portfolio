import React from 'react'
import {VerticalTimeline} from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../data/constants'
import ExperienceCard from './cards/ExperienceCard'
console.log(experiences)

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col items-center justify-center py-10 text-white relative z-10">
      <div className="w-full max-w-[1100px] text-center mb-12 px-4">
    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h3>
    <p className="text-md md:text-lg text-gray-300">
     A look at the companies I’ve worked with and the impactful roles I’ve taken on.
    </p>
    <VerticalTimeline>
       {experiences.map((experiences,index) =>(
         <ExperienceCard key={`experience- ${index}`} experience={experiences} />
       ))}
    </VerticalTimeline>
  </div>
    </div>
  )
}
