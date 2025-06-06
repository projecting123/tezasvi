"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { User2 } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Flex } from '@radix-ui/themes'
import { Label } from '../ui/label'
export default function UserAccount() {
    const [loginOpen, setLoginOpen] = useState(false)
    return (
        <>
            <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
                <DialogTrigger>
                    <User2 size={'20'} color='white' className='cursor-pointer' />
                </DialogTrigger>
                <DialogContent onInteractOutside={e => e.preventDefault()}>
                    <DialogHeader>
                        <DialogTitle>Log in</DialogTitle>
                    </DialogHeader>
                    <form action="" className='flex flex-col gap-5'>
                        <Flex direction={'column'}>
                            <Label htmlFor="email" className='mb-3'>Email</Label>
                            <Input type="email" name="email" id="email" className='w-full h-10' placeholder='Enter your email...' />
                        </Flex>
                        <Flex direction={'column'}>
                            <Flex justify={'between'} align={'center'}>
                                <Label htmlFor="password">Password</Label>
                                <Button variant={'link'} className='cursor-pointer text-blue-400 underline'>Reset password</Button>
                            </Flex>
                            <Input type="password" name="password" id="password" className='w-full h-10' placeholder='Enter your password...' />
                        </Flex>
                        <Button className='mt-3 cursor-pointer'>Log in</Button>
                        <Flex justify={'center'} className='text-sm' align={'center'}>
                            Don&apos;t have an account? <CreateAccount />
                        </Flex>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export function CreateAccount() {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={'link'} className='cursor-pointer text-blue-400 underline'>Sign up</Button>
                </DialogTrigger>
                <DialogContent onInteractOutside={e => e.preventDefault()}>
                    <DialogHeader>
                        <DialogTitle>Create an account</DialogTitle>
                    </DialogHeader>
                    <form action="" className='flex flex-col gap-5'>
                        <Flex direction={'column'}>
                            <Label htmlFor='email' className='mb-2'>Email</Label>
                            <Input type="email" name="email" id="email" className='w-full h-10' placeholder='Enter your email...' />
                            <span className='text-sm opacity-50 mt-1'>We don&apos;t share your email with anyone</span>
                        </Flex>

                        <Flex direction={'column'}>
                            <Label htmlFor="password" className='mb-2'>Password</Label>
                            <Input type="password" name="password" id="password" className='w-full h-10' placeholder='Enter your password...' />
                        </Flex>

                        <Flex direction={'column'}>
                            <Label htmlFor="confirmPassword" className='mb-2'>Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" className='w-full h-10' placeholder='Confirm your password...' />
                        </Flex>
                        <Button className='mt-3 cursor-pointer'>Create an account</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

