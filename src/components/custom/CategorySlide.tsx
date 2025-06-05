"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Image from 'next/image'
import { Box, Flex, Text } from '@radix-ui/themes'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
const CATEGORIES = [
    { name: 'Man', imgSrc: 'man.png' },
    { name: 'Woman', imgSrc: 'woman.png' },
    { name: 'Kids', imgSrc: 'kids.png' },
    { name: 'New', imgSrc: 'new-arrival.png' },
    { name: 'Discount', imgSrc: 'discount.png' },
    { name: 'Quality', imgSrc: 'quality.png' },
]

export default function CategorySlide() {
    useGSAP(()=> {
        gsap.from(".category", { duration: 0.5, autoAlpha: 0, y: 200, ease: "sine.out", stagger: {from: 'center', amount: 0.15} })
    })
    return (
        <Box display={{ initial: 'block', sm: 'none' }}>
            <Carousel className="w-full my-2 px-4 sticky top-0">
                <CarouselContent className="-ml-1">
                    {Array.from(CATEGORIES).map((category, index) => (
                        <CarouselItem key={index} className="pl-1 basis-1/5 category">
                            <div>
                                <Flex direction={'column'} align={'center'} className='border rounded-md shadow-md p-1'>
                                    <Image src={`/bottom-navbar/${category.imgSrc}`} alt={category.name} width={40} height={40} />
                                    <Text size={'2'} align={'center'}>{category.name}</Text>
                                </Flex>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Box>
    )
}
