import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { IoIosArrowUp } from 'react-icons/io'
import { Skill, PageInfo, Experience, Social, Project } from '@/typings'
import { GetStaticProps } from 'next'
import {
  fetchExperiences,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from '@/utils/fetchApi'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

type props = {
  pageInfo: PageInfo
  skills?: Skill[]
  experience?: Experience[]
  social?: Social[]
  project?: Project[]
}

export default function Home({
  pageInfo,
  social,
  skills,
  project,
  experience,
}: props) {
  useEffect(() => {
    console.log(pageInfo)
    console.log(social)
    console.log(skills)
    console.log(project)
    console.log(experience)
  })

  return (
    <div
      onScroll={() => {}}
      className='bg-[#0000] text-gray-600 h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6C55E0] scroll-smooth overflow-x-hidden'
    >
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header socials={social} />
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience experience={experience} />
      </section>
      <section id='skills' className='snap-center'>
        <Skills skills={skills} />
      </section>
      <section id='projects' className='snap-center'>
        <Projects project={project} />
      </section>
      <section className='snap-center' id='contact'>
        <ContactMe />
      </section>

      <Link
        href={'#hero'}
        className='w-10 h-10 fixed right-10 bottom-4 animate-bounce'
      >
        <div className='w-full h-full rounded-sm bg-[#6C55E0]'>
          <IoIosArrowUp color='white' className='mx-auto h-full'></IoIosArrowUp>
        </div>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<props> = async () => {
  const pageInfo = await fetchPageInfo()
  const social = await fetchSocials()
  const skills = await fetchSkills()
  const project = await fetchProjects()
  const experience = await fetchExperiences()

  return {
    props: {
      pageInfo,
      social,
      skills,
      project,
      experience,
    },
    revalidate: 10,
  }
}
