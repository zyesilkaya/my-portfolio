import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'

type Props = {
  experience?: Experience[]
}

const WorkExperience = ({ experience }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='snap-title'>Experience</h3>
      <div className='relative w-full h-[88%] flex overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6C55E0] snap-x snap-mandatory overflow-y-hidden gap-2'>
        {experience?.map((item) => {
          return <ExperienceCard key={item._id} experience={item} />
        })}
      </div>
    </motion.div>
  )
}

export default WorkExperience
