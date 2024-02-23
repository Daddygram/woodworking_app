import React from 'react'
import { Slider } from './Slider'

const About = () => {
  return (
    <section id='about' className='max-container padding-container flexCenter flex-col mt-[100px]'>
      <h2 className='capitalize regular-40 text-gold-90'>რას ვსაქმიანობთ?</h2>
      <p className='text-gray-10 pt-4 pb-4 regular-16 text-center max-w-[750px]'>ჩვენ ვქმნით 3D დიზაინს და ვაქცევთ რეალობად.</p>
      <Slider />
    </section>
  )
}

export default About