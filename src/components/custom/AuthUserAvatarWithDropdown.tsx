"use client"
import { User } from '@supabase/supabase-js'
import React, { useActionState, useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserRound, ShoppingBasket, Gift, MapPin, LogOut } from 'lucide-react';
import Link from 'next/link';
import { logout } from '@/utils/actions/form';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { toast } from 'sonner';
import Form from 'next/form';

export default function AuthUserAvatarWithDropdown({ user }: { user: User | null }) {
    const [state, action] = useActionState(logout, { message: ' ', statusText: ' '});
    const avatar = (user?.user_metadata['name'] as string).at(0)?.toUpperCase();
    useEffect(() => {
        if(state?.statusText === 'success') toast.success(state.message, { position: 'bottom-center' })
        else toast.error(state.message, { position: 'bottom-center' })
    }, [state])
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarFallback className='cursor-pointer'>{avatar}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href='/account/profile' className='cursor-pointer'><UserRound /> Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href={'/account/order-history'} className='cursor-pointer'><ShoppingBasket /> Order History</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'><Gift /> Rewards</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'><MapPin /> Address</DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Form action={action} formMethod="post" className='w-full'>
                        <button onClick={logout} className='w-full cursor-pointer flex items-center gap-2'><LogOut /> Log out</button>
                    </Form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
