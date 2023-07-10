import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true }}
      className='h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <div className='relative flex overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6C55E0] w-[90%] h-[80%] overflow-y-hidden snap-x snap-mandatory z-20 top-14'>
        {projects.map((item, i) => (
          <div
            key={i}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-32 h-screen'
          >
            <motion.img
              initial={{ y: -300 }}
              transition={{ duration: 0.75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src='https://burgessforensics.com/wp-content/uploads/2016/10/ManyMobileDevices.jpg'
              alt=''
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-2xl font-semibold text-center'>
                <span className='underline decoration-[#6C55E0]/50'>
                  Case Study {i + 1} of {projects.length}:{' '}
                </span>
                UPS clone
              </h4>
              <p className='text-md text-center md:text-left'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                consequuntur temporibus veniam, dignissimos tenetur officia,
                nesciunt, cum aliquid excepturi dolor aspernatur minima
                reiciendis quam aut omnis asperiores maiores quidem id
                laudantium atque impedit quo. Optio, vitae facilis veritatis
                reprehenderit itaque ducimus veniam quis saepe nostrum dicta
                rerum facere, libero repellat vel quo animi fuga in! Facere,
                animi? Alias, aut corporis!
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
