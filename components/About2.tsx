import Image from 'next/image'
import React from 'react'

const About2 = () => {
  return (
    <section className='max-container flexCenter mt-[200px] relative banner'>
        <div className='w-[700px] absolute top-[-50px] left-0' id='banner-img'>
            <Image src={"/furniture-banner-withfloor.png"} alt='furniture' width={800} height={800}/>
        </div>
        <div className='w-full md:p-20 p-5 flex flex-col'>
            <p className='text-gray-10 pt-4 pb-4 regular-16 max-w-[500px] text-center self-end about'>Welcome to our website, where craftsmanship meets innovation. <span className='bold-16'>Our experience starts from 1998</span>. 
            We bring your ideas to life through 3D designs, letting you see your vision before we build it. Whether it's custom furniture or stylish interiors, 
            our dedication shines through. </p>
        </div>
    </section>
  )
}

export default About2