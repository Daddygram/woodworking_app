"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [burger, setburger] = useState(false)

  const closeBurgerMenu = () => {
    setburger(false)
    const checkbox = document.getElementById("check") as HTMLInputElement
    checkbox.checked = false
  }

  const toggleBurger = () => {
      setburger(prev => !prev)
  }
  return (
    <nav className="fixed w-[100vw] bg-gold-10 flexBetween padding-container z-10">
        <Link href={"/"}>
            <Image src={"/woodko-logo.png"} alt="logo" width={100} height={100} />
        </Link>
        
          <ul className={`${burger ? "fixed right-0 top-0 w-[100vw] h-[100vh] flexCenter flex-col bg-gold-10" : "hidden"} " lg:flexCenter gap-14 h-full"`}>
            <li className="regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold uppercase text-gold-90"><Link href={'#home'} onClick={(() => closeBurgerMenu())}>მთავარი</Link></li>
            <li className="regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold uppercase text-gold-90"><Link href={'#about'} onClick={(() => closeBurgerMenu())}>ჩვენს შესახებ</Link></li>
            <li className="regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold uppercase text-gold-90"><Link href={'#gallery'} onClick={(() => closeBurgerMenu())}>გალერეა</Link></li>
            <li className="regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold uppercase text-gold-90"><Link href={'#steps'} onClick={(() => closeBurgerMenu())}>კონტაქტი</Link></li>
          </ul>
        
        <input type="checkbox" id="check" className="hidden"/>

        <label htmlFor="check" className={`mr-4 relative cursor-pointer w-10 h-12 block lg:hidden`} id="burger" onClick={toggleBurger}>
          <span className="top-0 absolute w-full h-2 bg-gold-50 rounded-full transition-transform ease duration-300 transform origin-top-left"></span>
          <span className="top-4 absolute w-full h-2 bg-gold-50 rounded-full transition-opacity ease duration-300"></span>
          <span className="top-8 absolute w-full h-2 bg-gold-50 rounded-full transition-transform ease duration-300 transform origin-bottom-left"></span>
        </label>
    </nav>
  )
}

export default Navbar