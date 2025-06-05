'use client'
import Image from 'next/image'
import React from 'react'
import { Flex, Text } from '@radix-ui/themes'
import { IndianRupeeIcon } from 'lucide-react'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react"
import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
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
    gsap.from(".product", { duration: 0.5, scrollTrigger: ".product", autoAlpha: 0, y: 50, ease: "circ", stagger: 0.1 })
  })

  const orderProduct = (rawName: string, pid: number) => {
    router.push(`/product/${rawName}?pid=${pid}`)
  }

  return (
    <Flex direction={'column'} gap={'4'}>
      <Flex justify={'center'} gap={'9'}>
        <Select>
          <SelectTrigger className='self-center'>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Price: Low to High</SelectItem>
            <SelectItem value="2">Price: High to Low</SelectItem>
            <SelectItem value="3">Newest</SelectItem>
            <SelectItem value="4">Oldest</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='man'>Man</SelectItem>
            <SelectItem value='woman'>Woman</SelectItem>
            <SelectItem value='kids'>Kids</SelectItem>
          </SelectContent>
        </Select>
      </Flex>

      <Flex gap={'4'} wrap={'wrap'} justify={'center'}>
        {PRODUCTS.map((product, index) => (
          <Flex key={index} className='product border shadow-md rounded-md p-2' direction={'column'} justify={'center'} align={'center'}>
            <Text align={'center'} my={'2'}>{product.displayName}</Text>
            <Image src={product.imgSrc} alt={product.displayName} className='cursor-pointer' width={150} height={350} onClick={() => orderProduct(product.rawName, index + 1)}/>
            <Text className='flex items-center' mt={'2'}><IndianRupeeIcon size={14} />399</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>

  )
}
