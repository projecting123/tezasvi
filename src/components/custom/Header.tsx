'use client'

import { Box, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import CategorySlide from '@/components/custom/CategorySlide'
import { Input } from '@/components/ui/input'
import { MobileProductSearch } from '@/components/custom/MobileProductSearch'
import UserAccount from '@/components/custom/UserAccount'
import { User } from '@supabase/supabase-js'
import AuthUserAvatarWithDropdown from './AuthUserAvatarWithDropdown'
export default function Header({ user }: {user: User | null}) {
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
          {user ? <AuthUserAvatarWithDropdown user={user}/> : <UserAccount/>}
        </Flex>
      </header>
      <CategorySlide/>
    </>

  )
}
