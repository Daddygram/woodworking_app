"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    '/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg',
    '/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg',
  ]

  const [open, setopen] = useState('')

  return (
    <section id='gallery' className='max-container padding-container flexCenter flex-col mt-[200px]'>
      <h2 className='capitalize regular-40 text-gold-90'>Check Out Our Projects</h2>
      <div className='grid place-items-center relative w-[90%] overflow-hidden mt-8'>
        <div className='w-[calc(300px*12)] flex gap-5 scroll hover:scroll-pause'>
          {images.map((image, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url(${image})` }}
              className="bg-no-repeat bg-cover bg-center w-[300px] h-[300px] hover:scale-110 transition-transform cursor-pointer"
              onClick={() => setopen(image)}
            />
          ))}
        </div>
      </div>
        <div className='fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] w-[100vw] h-[100vh]' style={{display: open? 'block' : 'none'}}>
          <span onClick={()=>setopen('')} className='absolute top-2 right-5 font-extrabold cursor-pointer regular-64 text-gold-50'>&times;</span>
          <Image src={open} alt='furniture' width={500} height={500} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-h-[95%] max-w-[95%]' />
        </div>
      
    </section>
  )
}

export default Gallery;
