import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'
import { urlFor } from '../../sanity'

type Props = {
  experience?: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='relative flex flex-col rounded-1 items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#eae8f8] p-10 h-[550px] overflow-hidden cursor-pointer hover:opacity-100 opacity-40 transition-opacity top-20'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='h-24 w-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
        alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-lg mt-1'>{experience?.company}</p>

        <p className='uppercase py-5 text-gray-300'>
          Started work at {experience?.dateStarted.toString()} -{' '}
          {experience?.dateEnded.toString()}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-sm'>
          {experience?.points &&
            experience.points.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
