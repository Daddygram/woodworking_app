import Image from 'next/image'
import React from 'react'

const About2 = () => {
  return (
    <section className='max-container flexCenter mt-[200px] relative banner'>
        <div className='w-[700px] absolute top-[-50px] left-0' id='banner-img'>
            <Image src={"/furniture-banner-withfloor.png"} alt='furniture' width={800} height={800}/>
        </div>
        <div className='w-full md:p-20 p-5 flex flex-col'>
            <p className='text-gray-10 pt-4 pb-4 regular-16 max-w-[500px] text-center self-end about'>მოგესალმებით ჩვენს საიტზე, სადაც ავეჯის დამზადების  
და ინოვაციის იდეალურ შერწყმას შეხვდებით. <span className='bold-16'>1998 წლიდან დღემდე თქვენს იდეებს რეალობად ვაქცევთ</span>. 
ასევე გთავაზობთ 3დ ნიმუშებს სასურველი მოდელის შექმნამდე, რათა თქვენ ხედვას  სრულყოფილი სახე მივცეთ.</p>
        </div>
    </section>
  )
}

export default About2