"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { updatePassword } from '@/utils/actions/form'
import { Flex, Text } from '@radix-ui/themes'
import Form from 'next/form'
import { LockKeyhole } from 'lucide-react';
import React, { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { Separator } from '@/components/ui/separator'

export default function page() {
    const [state, action, pending] = useActionState(updatePassword, { message: ' ', statusText: ' ' });
    useEffect(() => {
        if (state?.statusText === 'success') toast.success("Success", {
            description: state?.message
        })
        else toast.error("Error", {
            description: state?.message
        })
    }, [state])
    return (
        <Flex justify={'center'} align={'center'} minHeight={'70dvh'}>
            <Flex direction={'column'} gap={'2'} flexGrow={'1'} align={'center'}>
                <Form action={action} formMethod='post'>
                    <Card>
                        <CardHeader className='flex flex-col gap-0 items-center'>
                            <CardTitle className='text-center text-2xl select-none'>Update Password</CardTitle>
                            <CardDescription className='text-center opacity-45 select-none'>Keep it unique and secure</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Flex direction={'column'} gap={'4'} width={{ initial: '80vw', sm: '400px' }}>
                                <div className='relative'>
                                    <LockKeyhole size={'20'} className='absolute top-1/2 left-3 -translate-y-1/2 opacity-50' />
                                    <Separator orientation='vertical' className='absolute left-10 top-1/2 h-5 -translate-y-1/2'/>
                                    <Input className='pl-12' type='password' name='password' placeholder='Enter your new password' autoComplete='off' aria-label='Password' />
                                </div>

                                <div className='relative'>
                                    <LockKeyhole size={'20'} className='absolute top-1/2 left-3 -translate-y-1/2 opacity-50' />
                                    <Separator orientation='vertical' className='absolute left-10 top-1/2 h-5 -translate-y-1/2'/>
                                    <Input className='pl-12' type='password' name='confirmPassword' placeholder='Confirm your password' autoComplete='off' aria-label='Confirm Password' />
                                </div>
                                <Button disabled={pending} variant={'outline'} className='cursor-pointer self-center'>
                                    {pending && <span className='loading loading-spinner'></span>}
                                    <Text>Submit</Text>
                                </Button>
                            </Flex>
                        </CardContent>
                    </Card>
                </Form>
            </Flex>
        </Flex>
    )
}
