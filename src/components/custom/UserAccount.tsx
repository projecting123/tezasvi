"use client"
import React, { useActionState, useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { User2 } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Flex, Text } from '@radix-ui/themes'
import { Label } from '../ui/label'
import { CircleUser, CircleUserRound } from 'lucide-react';
import { emailValidateOnKeydown } from '@/utils/functions/email-validator'
import Link from 'next/link'
import Form from "next/form"
import { login, signup } from '@/utils/actions/form'
import { toast } from 'sonner'
export default function UserAccount() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [state, action, pending] = useActionState(login, { message: ' ' });
    useEffect(() => {
        if(state?.message === ' ') return;
        else toast("Hello user!", {
            description: state?.message
        })
    }, [state])
    return (
        <>
            <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
                <DialogTrigger>
                    <User2 size={'20'} color='white' className='cursor-pointer' />
                </DialogTrigger>
                <DialogContent onInteractOutside={e => e.preventDefault()}>
                    <DialogHeader className='flex flex-col gap-1'>
                        <CircleUser size={'40'} className='mx-auto' />
                        <DialogTitle className='text-center text-xl opacity-50'>Log in</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <Form action={action} formMethod='post' className='flex flex-col gap-5'>
                        <Flex direction={'column'}>
                            <Label htmlFor="email" className='mb-3'>Email</Label>
                            <Input type="email" name="email" id="email" className='w-full' placeholder='Enter your email...' onKeyDown={emailValidateOnKeydown} />
                        </Flex>
                        <Flex direction={'column'}>
                            <Flex justify={'between'} align={'center'} className='mb-2'>
                                <Label htmlFor="password">Password</Label>
                                <Text asChild className='underline sm:no-underline text-sm hover:underline'>
                                    <Link href='/reset-password' className='cursor-pointer text-blue-400 hover:text-blue-500' onNavigate={() => setLoginOpen(false)}>Reset Password</Link>
                                </Text>
                            </Flex>
                            <Input type="password" name="password" id="password" className='w-full' placeholder='Enter your password...' />
                        </Flex>
                        <Button className='mt-3 cursor-pointer' disabled={pending}>Log in</Button>
                        <Flex justify={'center'} className='text-sm gap-2' align={'center'}>
                            <Text>Don&apos;t have an account?</Text><CreateAccount />
                        </Flex>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export function CreateAccount() {
    const [state, action, pending] = useActionState(signup, { message: ' ' })
    useEffect(() => {
        if(state?.message === ' ') return;
        else toast("Hello user!", {
            description: state?.message
        })
    }, [state])
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Text asChild className='underline sm:no-underline text-sm hover:underline'>
                        <button className='cursor-pointer text-blue-400 hover:text-blue-500'>Sign up</button>
                    </Text>
                </DialogTrigger>
                <DialogContent onInteractOutside={e => e.preventDefault()}>
                    <DialogHeader className='flex flex-col gap-1'>
                        <CircleUserRound size={'40'} className='mx-auto' />
                        <DialogTitle className='text-center text-xl opacity-50'>Sign up</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <Form action={action} formMethod='post' className='flex flex-col gap-5'>
                        <Flex direction={'column'}>
                            <Label htmlFor='email' className='mb-2'>Email</Label>
                            <Input type="email" name="email" id="email" className='w-full' placeholder='Enter your email...' onKeyDown={emailValidateOnKeydown} />
                            <span className='text-sm opacity-50 mt-1'>We don&apos;t share your email with anyone</span>
                        </Flex>

                        <Flex direction={'column'}>
                            <Label htmlFor="password" className='mb-2'>Password</Label>
                            <Input type="password" name="password" id="password" className='w-full' placeholder='Enter your password...' />
                        </Flex>

                        <Flex direction={'column'}>
                            <Label htmlFor="confirmPassword" className='mb-2'>Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" className='w-full' placeholder='Confirm your password...' />
                        </Flex>
                        <Button className='mt-3 cursor-pointer' disabled={pending}>Create an account</Button>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}

