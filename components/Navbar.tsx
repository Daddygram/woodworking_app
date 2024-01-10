"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [burger, setburger] = useState('')
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href={"/"}>
            <Image src={"/aveji-logo.png"} alt="logo" width={200} height={50} />
        </Link>
        <ul className="hidden lg:flexCenter gap-14 h-full">
          <li className="regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold uppercase text-gold-90"><Link href={'#home'}>Home</Link></li>
          <li className="regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold uppercase text-gold-90"><Link href={'#about'}>About Us</Link></li>
          <li className="regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold uppercase text-gold-90"><Link href={'#gallery'}>Gallery</Link></li>
          <li className="regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold uppercase text-gold-90"><Link href={'#contact'}>Contact</Link></li>
        </ul>
        <input type="checkbox" id="check" className="hidden" />

        <label htmlFor="check" className={`mr-4 relative cursor-pointer w-10 h-12 block lg:hidden`} id="burger">
          <span className="top-0 absolute w-full h-2 bg-gold-50 rounded-full transition-transform ease duration-300 transform origin-top-left"></span>
          <span className="top-4 absolute w-full h-2 bg-gold-50 rounded-full transition-opacity ease duration-300"></span>
          <span className="top-8 absolute w-full h-2 bg-gold-50 rounded-full transition-transform ease duration-300 transform origin-bottom-left"></span>
        </label>
    </nav>
  )
}

export default Navbar