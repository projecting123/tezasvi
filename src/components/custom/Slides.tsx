"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
const SLIDES = [{ name: 'sld1', imgSrc: '/sld1.jpg' }, { name: 'sld2', imgSrc: '/sld2.jpg' }]

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

export default function TezasviCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false, playOnInit: true })
    )
    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            onPointerOut={plugin.current.reset}
        >
            <CarouselContent>
                {SLIDES.map((slide, index) => (
                    <CarouselItem key={index}>
                        <div className="m-4">
                            <AspectRatio ratio={5 / 2}>
                                <Image src={slide.imgSrc} alt={slide.name} fill />
                            </AspectRatio>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
