"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { resetPassword } from '@/utils/actions/form'
import { Flex, Heading, Text } from '@radix-ui/themes'
import React, { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import Form from "next/form"
import { Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { emailValidateOnKeydown } from '@/utils/functions/form-live-validator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
export default function ResetPassword() {
  const [state, action, pending] = useActionState(resetPassword, { message: ' ', statusText: ' ' });
  useEffect(() => {
    if (state?.message === ' ' || state?.statusText === ' ') return;
    else {
      if (state?.statusText === 'success') toast.success("Success", {
        description: state?.message
      })
      else toast.error("Error", {
        description: state?.message
      })
    }
  }, [state])
  return (
    <>
      <Flex justify={'center'} align={'center'} direction={'column'} minHeight={'70dvh'}>
        <Flex justify={'center'} align={'start'} direction={'column'} gap={'3'} flexGrow={'1'}>
          <Card>
            <CardHeader className='flex flex-col gap-0 items-center'>
              <CardTitle className='text-center text-2xl opacity-50 select-none'>Reset Password</CardTitle>
              <CardDescription className='text-center opacity-45 select-none'>Enter your email to reset your password</CardDescription>
            </CardHeader>
            <CardContent>
              <Form action={action} formMethod='post'>
                <Flex direction={'column'} gap={'5'} flexGrow={'1'} width={{ initial: '80vw', sm: '400px' }}>
                  <div className='relative'>
                    <Mail size={'20'} className='absolute opacity-50 top-1/2 left-3 -translate-y-1/2' />
                    <Separator orientation='vertical' className='absolute left-10 top-1/2 h-5 -translate-y-1/2' />
                    <Input className='pl-12 pb-2' type="email" name="email" id="email" placeholder='Enter your email' onKeyDown={emailValidateOnKeydown} />
                  </div>
                  <Button disabled={pending} className='cursor-pointer self-center'>
                    {pending && <span className='loading loading-spinner'></span>}
                    <Text>Proceed</Text>
                  </Button>
                </Flex>
              </Form>
            </CardContent>
          </Card>
        </Flex>
      </Flex>
    </>
  )
}
