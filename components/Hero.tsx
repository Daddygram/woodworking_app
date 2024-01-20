import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section id='home' className="relative h-[500px] w-full max-w-[1920px] m-auto mt-[107px] flexCenter">
        <div className="bg-[url('/kitchen-banner.jpg')] brightness-50 bg-no-repeat bg-cover bg-center w-full h-full" />
        <Link href={"#gallery"} 
        className="absolute capitalize text-white outline outline-gold-50 cursor-pointer px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 
                  hover:shadow-[0.5rem_0.5rem_#D6AE7B,-0.5rem_-0.5rem_#EACDA3] hover:outline-none transition-all">
          <button>
              View Our Work
          </button>
        </Link>
    </section>
  )
}

export default Hero 