'use client'
import Image from 'next/image'
import React from 'react'
import { Flex, Text } from '@radix-ui/themes'
import { IndianRupeeIcon } from 'lucide-react'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react"
import { useRouter } from 'next/navigation'
const PRODUCTS = [{
  rawName: "black-tshirt",
  displayName: 'Black T-Shirt',
  imgSrc: '/black-tshirt.jpg',
},
{
  rawName: "white-tshirt",
  displayName: 'White T-Shirt',
  imgSrc: '/white-tshirt.jpg',
},
{
  rawName: "black-tshirt",
  displayName: 'Black T-Shirt',
  imgSrc: '/black-tshirt.jpg',
},
{
  rawName: "white-tshirt",
  displayName: 'White T-Shirt',
  imgSrc: '/white-tshirt.jpg',
},
{
  rawName: "black-tshirt",
  displayName: 'Black T-Shirt',
  imgSrc: '/black-tshirt.jpg',
},
{
  rawName: "white-tshirt",
  displayName: 'White T-Shirt',
  imgSrc: '/white-tshirt.jpg',
},
{
  rawName: "black-tshirt",
  displayName: 'Black T-Shirt',
  imgSrc: '/black-tshirt.jpg',
},
{
  rawName: "white-tshirt",
  displayName: 'White T-Shirt',
  imgSrc: '/white-tshirt.jpg',
},
{
  rawName: "black-tshirt",
  displayName: 'Black T-Shirt',
  imgSrc: '/black-tshirt.jpg',
},
{
  rawName: "white-tshirt",
  displayName: 'White T-Shirt',
  imgSrc: '/white-tshirt.jpg',
},
{
  rawName: "black-tshirt",
  displayName: 'Black T-Shirt',
  imgSrc: '/black-tshirt.jpg',
},
{
  rawName: "white-tshirt",
  displayName: 'White T-Shirt',
  imgSrc: '/white-tshirt.jpg',
},
]

// importing and registering ScrollTrigger plugin for triggering animation on scroll to an item.
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const router = useRouter()
  useGSAP(() => {
    gsap.from(".product", { duration: 0.5, delay: 0.2, scrollTrigger: ".product", autoAlpha: 0, y: 50, ease: "circ", stagger: 0.1 })
  })

  const orderProduct = (rawName: string, pid: number) => {
    router.push(`/product/${rawName}?pid=${pid}`)
  }

  return (
    <Flex direction={'column'} gap={'4'}>
      <Flex gap={'4'} wrap={'wrap'} justify={'center'}>
        {PRODUCTS.map((product, index) => (
          <Flex key={index} className='product border shadow-md rounded-md p-2' direction={'column'} justify={'center'} align={'center'}>
            <Text align={'center'} my={'2'}>{product.displayName}</Text>
            <Image loading='lazy' src={product.imgSrc} alt={product.displayName} className='cursor-pointer' width={150} height={350} onClick={() => orderProduct(product.rawName, index + 1)}/>
            <Text className='flex items-center' mt={'2'}><IndianRupeeIcon size={14} />399</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>

  )
}
