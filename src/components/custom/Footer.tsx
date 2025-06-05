import { Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import { Separator } from '../ui/separator'
import { Box } from '@radix-ui/themes'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Input } from '../ui/input'

export default function Footer() {
  return (
    <footer className='mt-4'>
      <Flex direction={'column'} className='bg-[#410F0F] text-white'>
        <Flex direction={{initial: 'column', sm: 'row'}} gap={'4'} justify={{initial: 'start', sm: 'center'}} p={'5'} >
          <Flex gap={'2'} direction={'column'}>
            <Heading size={'5'} color='amber'>Customer Service</Heading>
            <Flex direction={{ initial: 'row', sm: 'column'}} gap={'2'} className='text-sm'>
                <Text>Contact Us</Text>
                <Box display={{ initial: 'inline-block', sm: 'none'}}><Separator orientation='vertical' className='opacity-70'/></Box>
                <Text>Track Order</Text>
                <Box display={{ initial: 'inline-block', sm: 'none'}}><Separator orientation='vertical' className='opacity-70'/></Box>
                <Text>Return Order</Text>
            </Flex>
          </Flex>

          <Flex gap={'2'} direction={'column'}>
            <Heading size={'5'} color='amber'>Company</Heading>
            <Flex direction={{ initial: 'row', sm: 'column'}} gap={'2'} className='text-sm'>
                <Text>About Us</Text>
                <Box display={{ initial: 'inline-block', sm: 'none'}}><Separator orientation='vertical' className='opacity-70'/></Box>
                <Text>Terms & Conditions</Text>
                <Box display={{ initial: 'inline-block', sm: 'none'}}><Separator orientation='vertical' className='opacity-70'/></Box>
                <Text>Privacy Policy</Text>
            </Flex>
          </Flex>

          <Flex gap={'2'} direction={'column'}>
            <Heading size={'5'} color='amber'>Follow us on</Heading>
            <Flex gap={'2'}>
                <Facebook/>
                <Instagram/>
                <Twitter/>
            </Flex>
          </Flex>

          <Flex gap={'2'} direction={'column'}>
            <Heading size={'5'} color='amber'>Keep up to date</Heading>
            <Input type='text' name='email' placeholder='Enter your email' autoComplete='off' aria-label='Email to receive updates from Tezasvi.'/>
          </Flex>

        </Flex>
        <Separator className='opacity-50'/>
        <Flex justify={'center'} p={'5'}>
            <Text size={'2'} className='opacity-70'>© 2025 Tezasvi. All rights reserved.</Text>
        </Flex>
      </Flex>
    </footer>
  )
}
