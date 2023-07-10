import { Skill, PageInfo, Experience, Social, Project } from '@/typings'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'

export const fetchSkills = async () => {
  const query = groq`
    *[_type == "skill"]
`

  const skills: Skill[] = await sanityClient.fetch(query)

  return skills
}

export const fetchPageInfo = async () => {
  const query = groq`
    *[_type == "pageInfo"][0]
`

  const pageInfo: PageInfo = await sanityClient.fetch(query)

  return pageInfo
}

export const fetchExperiences = async () => {
  const query = groq`
    *[_type == "experience"]{
    ...,
    technologies[]->
    }
`
  const experience: Experience[] = await sanityClient.fetch(query)

  return experience
}

export const fetchSocials = async () => {
  const query = groq`
    *[_type == "social"]
`

  const socials: Social[] = await sanityClient.fetch(query)

  return socials
}

export const fetchProjects = async () => {
  const query = groq`
    *[_type == "project"]{
        ...,
        technologies[]->
    }
`
  const project: Project[] = await sanityClient.fetch(query)
  return project
}
