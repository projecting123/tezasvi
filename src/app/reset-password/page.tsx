"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { resetPassword } from '@/utils/actions/form'
import { Flex, Heading } from '@radix-ui/themes'
import React, { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import Form from "next/form"
export default function ResetPassword() {
  const [state, action, pending] = useActionState(resetPassword, { message: ' ' });
  useEffect(() => {
    if(state?.message === ' ') return;
    else toast("Hello user!", {
      description: state?.message
    })
  }, [state])
  return (
    <>
      <Flex justify={'center'} align={'center'} direction={'column'} minHeight={'70dvh'}>
        <Flex justify={'center'} align={'start'} direction={'column'} gap={'3'} flexGrow={'1'}>
          <Heading className='text-start opacity-50' mb={'3'}>Reset Password</Heading>
          <Form action={action} formMethod='post'>
            <Flex direction={'column'} gap={'5'} flexGrow={'1'} width={{initial: '80vw', sm: '400px'}}>
              <Input type='email' name='email' placeholder='Enter your email...' autoComplete='off' aria-label='Email to receive updates from Tezasvi.' />
              <Button disabled={pending}>Proceed</Button>
            </Flex>
          </Form>
        </Flex>
      </Flex>
    </>
  )
}
