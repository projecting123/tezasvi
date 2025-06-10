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
import { User2, Mail, LockKeyhole, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Flex, Text } from '@radix-ui/themes'
import { Label } from '@/components/ui/label'
import { CircleUser, CircleUserRound } from 'lucide-react';
import { emailInputHandler, emailValidateOnKeydown, nameValidateOnKeydown } from '@/utils/functions/form-live-validator'
import Link from 'next/link'
import Form from "next/form"
import { login, signup } from '@/utils/actions/form'
import { toast } from 'sonner'
import { Separator } from '../ui/separator'
export default function UserAccount() {
    const formRef = React.useRef<HTMLFormElement | null>(null);
    const [loginOpen, setLoginOpen] = useState(false);
    const [state, action, pending] = useActionState(login, { message: '', statusText: '', email: '' });
    useEffect(() => {
        if (state?.statusText == 'error') toast.error("Error", {
            description: state?.message
        })
    }, [state])
    return (
        <>
            <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
                <DialogTrigger>
                    <User2 size={'20'} color='white' className='cursor-pointer' />
                </DialogTrigger>
                <DialogContent onInteractOutside={e => e.preventDefault()} className='sm:w-[400px]'>
                    <DialogHeader className='flex flex-col gap-1'>
                        <CircleUser size={'40'} className='mx-auto' />
                        <DialogTitle className='text-center text-xl opacity-50'>Log in</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <Form action={action} formMethod='post' className='flex flex-col gap-3' ref={formRef}>
                        <Flex direction={'column'}>
                            <Label htmlFor="email" className='mb-3'>Email</Label>
                            <Flex align={'center'} position={'relative'}>
                                <Mail size={'20'} className='absolute opacity-50 top-1/2 left-3 -translate-y-1/2' />
                                <Separator orientation='vertical' className='absolute left-10 top-1/2 h-5 -translate-y-1/2'/>
                                <Input defaultValue={state?.email} className='pl-12 pb-2' type="email" name="email" id="email" placeholder='Enter your email' onKeyDown={emailValidateOnKeydown} onInput={emailInputHandler} />
                            </Flex>
                        </Flex>
                        <Flex direction={'column'}>
                            <Flex justify={'between'} align={'center'} className='mb-2'>
                                <Label htmlFor="password">Password</Label>
                                <Text asChild className='underline sm:no-underline text-sm hover:underline'>
                                    <Link href='/request-password-reset-link' className='cursor-pointer text-blue-400 hover:text-blue-500' onNavigate={() => setLoginOpen(false)}>Reset Password</Link>
                                </Text>
                            </Flex>
                            <div className='relative'>
                                <LockKeyhole size={'20'} className='absolute top-1/2 left-3 -translate-y-1/2 opacity-50' />
                                <Separator orientation='vertical' className='absolute left-10 top-1/2 h-5 -translate-y-1/2'/>
                                <Input className='pl-12 pb-1' type='password' name='password' placeholder='Enter your new password' autoComplete='off' aria-label='Password' />
                            </div>
                        </Flex>
                        <Button className='mt-3 cursor-pointer' disabled={pending} size={'sm'}>
                            {pending && <span className='loading loading-spinner'></span>}
                            <Text>Log in</Text>
                        </Button>
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
    const [state, action, pending] = useActionState(signup, { message: '', statusText: '', name: '', email: '' })
    useEffect(() => {
        if (state?.message === '' || state?.statusText === '') return;
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
            <Dialog>
                <DialogTrigger asChild>
                    <Text asChild className='underline sm:no-underline text-sm hover:underline'>
                        <button className='cursor-pointer text-blue-400 hover:text-blue-500'>Sign up</button>
                    </Text>
                </DialogTrigger>
                <DialogContent onInteractOutside={e => e.preventDefault()} className='sm:w-[400px]'>
                    <DialogHeader className='flex flex-col gap-1'>
                        <CircleUserRound size={'40'} className='mx-auto' />
                        <DialogTitle className='text-center text-xl opacity-50'>Sign up</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <Form action={action} formMethod='post' className='flex flex-col gap-3'>
                        <Flex direction={'column'}>
                            <Label htmlFor="name" className='mb-3'>Name</Label>
                            <div className='relative'>
                                <User size={'20'} className='absolute top-1/2 left-3 -translate-y-1/2 opacity-50' />
                                <Separator orientation='vertical' className='absolute left-10 top-1/2 h-5 -translate-y-1/2'/>
                                <Input defaultValue={state?.name} type="text" className='pl-12 pb-2' name="name" id="name" placeholder='Enter your name' onKeyDown={nameValidateOnKeydown}/>
                            </div>
                        </Flex>
                        <Flex direction={'column'}>
                            <Label htmlFor='email' className='mb-2'>Email</Label>
                            <div className='relative'>
                                <Mail size={'20'} className='absolute opacity-50 top-1/2 left-3 -translate-y-1/2' />
                                <Separator orientation='vertical' className='absolute left-10 top-1/2 h-5 -translate-y-1/2'/>
                                <Input defaultValue={state?.email} className='pl-12 pb-2' type="email" name="email" id="email" placeholder='Enter your email' onKeyDown={emailValidateOnKeydown} onInput={emailInputHandler} />
                            </div>
                            <span className='text-sm opacity-50 mt-1'>We don&apos;t share your email with anyone</span>
                        </Flex>

                        <Flex direction={'column'}>
                            <Label htmlFor="password" className='mb-2'>Password</Label>
                            <div className='relative'>
                                <LockKeyhole size={'20'} className='absolute top-1/2 left-3 -translate-y-1/2 opacity-50' />
                                <Separator orientation='vertical' className='absolute left-10 top-1/2 h-5 -translate-y-1/2'/>
                                <Input className='pl-12 pb-1' type='password' name='password' placeholder='Enter your new password' autoComplete='off' aria-label='Password' />
                            </div>
                        </Flex>

                        <Flex direction={'column'}>
                            <Label htmlFor="confirmPassword" className='mb-2'>Confirm Password</Label>
                            <div className='relative'>
                                <LockKeyhole size={'20'} className='absolute top-1/2 left-3 -translate-y-1/2 opacity-50' />
                                <Separator orientation='vertical' className='absolute left-10 top-1/2 h-5 -translate-y-1/2'/>
                                <Input className='pl-12 pb-1' type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm your password' />
                            </div>
                        </Flex>
                        <Button className='mt-3 cursor-pointer' disabled={pending}>
                            {pending && <span className='loading loading-spinner'></span>}
                            <Text>Create an account</Text>
                        </Button>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}

