import React from 'react'
import {VerticalTimeline} from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { education } from '../data/constants'
import EducationCard from './cards/EducationCard';


export default function Education() {
  return (
    <div id="education" className="flex flex-col items-center justify-center py-20  text-white relative z-10">
      <div className="w-full max-w-[1100px] text-center mb-12 px-4">
    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h3>
    <p className="text-md md:text-lg text-gray-300">
      My education has a journey of self-discovery educational detials are as follow
    </p>
    <VerticalTimeline>
       {education.map((education,index) =>(
         <EducationCard key={`education- ${index}`} education={education} />
       ))}
    </VerticalTimeline>
  </div>
    </div>
  )
}
