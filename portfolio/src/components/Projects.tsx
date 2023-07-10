import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings'
import { urlFor } from '../../sanity'

type Props = {
  project?: Project[]
}

const Projects = ({ project }: Props) => {
  const projects = project
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true }}
      className='h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='snap-title'>Projects</h3>
      <div className='relative flex overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6C55E0] w-[90%] h-[90%] overflow-y-hidden snap-x snap-mandatory z-20 -mt-10'>
        {projects?.map((item, i) => (
          <div
            key={i}
            className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center gap-10 px-10 h-screen'
          >
            <motion.img
              initial={{ y: -200 }}
              transition={{ duration: 0.75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(item?.image).url()}
              alt=''
              className='w-64 md:w-[15rem]'
            />
            <div className=' px-0 max-w-6xl'>
              <h4 className='text-lg md:text-2xl sm:text-lg font-semibold text-center'>
                <span className='underline decoration-[#6C55E0]/50'>
                  Case Study {i + 1} of {projects.length}:{' '}
                </span>
                {item?.title}
              </h4>
              <p className='text-md text-center md:text-left'>
                {item?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#6C55E0]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects
