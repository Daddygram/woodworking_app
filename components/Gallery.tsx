"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image1 from '../public/1.jpg';
import Image2 from '../public/2.jpg';
import Image3 from '../public/3.jpg';
import Image4 from '../public/4.jpg';
import Image5 from '../public/5.jpg';
import Image from "next/image"

export default function Gallery() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const images = [Image1, Image2, Image3, Image4, Image5]; // Array of imported images

  return (
    <section id='gallery' className='max-container padding-container flexCenter flex-col mt-[200px]'>
      <h2 className='capitalize regular-40 text-gold-90'>ჩვენი ნამუშევრები</h2>
      <Carousel
        plugins={[plugin.current]}
        className="w-full mt-10"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-transparent border-none">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <Image src={image} alt={`WoodkoHouse aveji`} className="w-full h-full object-cover rounded-lg" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gold-50"/>
        <CarouselNext className="bg-gold-50" />
      </Carousel>
    </section>
  )
}
