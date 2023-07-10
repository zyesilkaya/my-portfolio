import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='relative flex flex-col rounded-1 items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 h-[550px] overflow-hidden cursor-pointer hover:opacity-100 opacity-40 transition-opacity top-20'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='h-24 w-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
        src='aaaaaaaaaaaa.jpg'
        alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl font-light'>CEO of APES</h4>
        <p className='font-bold text-lg mt-1'>PAPAFAM</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='aaaaaaaaaaaa.jpg'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://avatars.githubusercontent.com/u/107780733?s=400&u=d8412091a36d5dde7e703f69917b1e643db63875&v=4'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://avatars.githubusercontent.com/u/107780733?s=400&u=d8412091a36d5dde7e703f69917b1e643db63875&v=4'
            alt=''
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>
          Started work... - Ended...
        </p>
        <ul className='list-disc space-y-4 ml-5 text-sm'>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
