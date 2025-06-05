'use client'

import { Box, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import { ShoppingCart, Search, User2 } from 'lucide-react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'
import Link from 'next/link'
import ProductSearchMobile from './ProductSearchMobile'
import CategorySlide from './CategorySlide'
export default function Header() {
  return (
    <>
      <header className='w-full sticky top-0 py-4 px-6 bg-[#410F0F] shadow-md z-100 flex justify-between items-center'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className='mr-4'>
              <Link href="/" className='flex flex-col items-center gap-1'>
                <Image src="/logo.png" className='cursor-pointer' alt="Tezasvi Logo" height={150} width={150} />
                <Text className='text-white' size={'1'}>Always in your heart</Text>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Flex gap={'6'}>
          <Box display={{initial: 'none', sm: 'inline-block'}}><Search color='white' className='cursor-pointer' onClick={() => { alert('Search') }} /></Box>
          <ShoppingCart color='white' className='cursor-pointer' />
          <User2 color='white' className='cursor-pointer' />
        </Flex>
      </header>
      <CategorySlide/>
      <ProductSearchMobile/>
    </>

  )
}
