import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flexBetween pt-[80px]'>
      <p className='text-gold-50 w-[200px] ml-5'>Copyright 2024 &copy; All Rights Reserved</p>
      <Link href={"/"}>
            <Image src={"/woodko-logo.png"} alt="logo" width={200} height={200} />
      </Link>
      <div className='flex flex-col text-gold-50 w-[200px] text-right pr-10'>
        <p className='regular-16'>Socials:</p>
        <Link href={"https://www.facebook.com/profile.php?id=100054641310989"} target='_blank' className="self-end">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256">
      <g fill="#d6ae7b" fillRule="nonzero">
        <g transform="scale(8.53333,8.53333)">
          <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
        </g>
      </g>
    </svg>
        </Link>
      </div>
      
    </footer>
  )
}

export default Footer