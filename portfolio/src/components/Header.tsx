import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '@/typings'

type props = {
  socials?: Social[]
}

const Header = ({ socials }: props) => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 overflow-hidden'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex items-center'
      >
        {socials?.map((item, index) => (
          <SocialIcon
            key={index}
            url={item.url}
            fgColor='#6C55E0'
            bgColor='transparent'
          />
        ))}
      </motion.div>

      <motion.div
        onClick={(e) => {
          window.location.href = '#contact'
        }}
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 1.5 }}
        className='flex items-center text-gray-300 cursor-pointer'
      >
        <Link href={'#contact'}></Link>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='#6C55E0'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-300'>
          Get In Touch
        </p>
      </motion.div>
    </header>
  )
}

export default Header
