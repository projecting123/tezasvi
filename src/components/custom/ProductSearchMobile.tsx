import React from 'react'
import { Input } from '../ui/input'
import { Flex } from '@radix-ui/themes'

export default function ProductSearchMobile() {
  return (
    <>
    <Flex justify={'center'} m={'4'} display={{initial: 'flex', sm: 'none'}}>
        <Input type='search' placeholder='Search for products...'/>
    </Flex>
    </>
  )
}
