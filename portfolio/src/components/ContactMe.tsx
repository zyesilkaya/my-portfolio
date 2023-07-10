import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    (window.location.href = `mailto:zeynepyesilkaya58@gmail?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`)
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='snap-title'>Contact</h3>
      <div className='relative flex top-10 flex-col space-y-10'>
        <h4 className='text-3xl font-semibold text-center'>
          I have got just what you need.{' '}
          <span className='decoration-[#6C55E0]/50 underline'>Lets Talk.</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='contact-icon text-[##6C55E0]/50 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+123456789</p>
          </div>
        </div>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='contact-icon text-[##6C55E0]/50 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>zeynpyesilkaya@gmail.com</p>
          </div>
        </div>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='contact-icon text-[##6C55E0]/50 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Ankara</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col w-screen space-y-2 sm:w-fit px-8 mx-auto'
        >
          <div className='flex flex-col items-center md:flex-row gap-2'>
            <input
              {...register('name')}
              className='contactInput'
              type='text'
              placeholder='Name'
            />
            <input
              {...register('email')}
              className='contactInput'
              type='text'
              placeholder='Surname'
            />
          </div>

          <input
            {...register('subject')}
            className='contactInput'
            type='text'
            placeholder='Subject'
          />
          <textarea
            {...register('message')}
            className='contactInput'
            placeholder='Message'
          />
          <button className='bg-[#6C55E0] py-5 px-10 rounded-md text-white font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
