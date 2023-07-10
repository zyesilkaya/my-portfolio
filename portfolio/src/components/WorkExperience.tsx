import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='relative w-full h-[88%] flex overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6C55E0] snap-x snap-mandatory overflow-y-hidden gap-2'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default WorkExperience
