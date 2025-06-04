
import Products from '@/components/custom/Products'
import Slides from '../components/custom/Slides'
import React from 'react'
import { Flex } from '@radix-ui/themes'

export default function LandingPage() {
  return (
    <Flex direction={'column'} gap={'4'}>
      <Slides/>
      <Products/>
    </Flex>
  )
}
