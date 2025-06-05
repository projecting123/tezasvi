import { Flex } from '@radix-ui/themes'
import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <Flex mx={'4'} direction={'column'}>
    <h1>Checkout Layout</h1>
    <div>{children}</div>
    </Flex>
  )
}
