import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section id='home' className="relative h-[500px] w-full max-w-[1920px] m-auto mt-[107px] flexCenter">
        <div className="bg-[url('/kitchen-banner.jpg')] brightness-50 bg-no-repeat bg-cover bg-center w-full h-full" />
        <div className='absolute capitalize flexCenter flex-col'>
          <h1 className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] mb-10 font-semi-bold sm:text-5xl text-2xl text-wrap text-center '>თანამედროვე ავეჯის დიზაინი და დამზადება</h1>
          <Link href={"#gallery"} 
          className=" text-white outline outline-gold-50 cursor-pointer px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 
                    hover:shadow-[0.5rem_0.5rem_#D6AE7B,-0.5rem_-0.5rem_#EACDA3] hover:outline-none transition-all">
            <button>
                ჩვენი ნამუშევრები
            </button>
          </Link>
        </div>
        
    </section>
  )
}

export default Hero 