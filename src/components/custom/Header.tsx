'use client'

import { Box, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'
import Link from 'next/link'
import CategorySlide from './CategorySlide'
import { Input } from '../ui/input'
import { MobileProductSearch } from './MobileProductSearch'
import UserAccount from './UserAccount'
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
        <Flex gap={'5'} align={'center'}>
          <Box display={{initial: 'inline-block', sm: 'none'}}>
            <MobileProductSearch/>
          </Box>
          <Box display={{initial: 'none', sm: 'inline-block'}}>
            <Input type='search' name='search' autoComplete='off' placeholder='Search for products...' aria-label='Search for products...' className='w-80 h-8 text-white'/>
          </Box>
          <ShoppingCart size={'20'} color='white' className='cursor-pointer' />
          <UserAccount/>
        </Flex>
      </header>
      <CategorySlide/>
    </>

  )
}
