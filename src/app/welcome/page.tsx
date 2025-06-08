"use client"
import { Dialog, DialogHeader } from '@/components/ui/dialog';
import { createClient } from '@/utils/supabase/client'
import { DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Flex } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { toast } from 'sonner';

export default function WelcomeToaster() {
    const supabase = createClient();
    const router = useRouter();
    const [open, setOpen] = React.useState(true);
    useEffect(() => {
        (async () => {
            const { data: { session } } = await supabase.auth.getSession();
            console.log(session?.user)
            if (session) {
                toast.success("Your email is verified successfully")
            }
        })()

        const timeout = setTimeout(() => {
            router.replace('/');
        }, 2500);

        return () => {
            clearTimeout(timeout);
            setOpen(false);
        };
    }, [])

    return (
        <Flex justify={'center'} align={'center'}>
            <Dialog open={open} modal>
                <DialogContent className='w-[250px]'>
                    <DialogHeader>
                        <DialogTitle>Welcome</DialogTitle>
                        <DialogDescription>
                            Please wait while we redirect you to the home page...
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </Flex>
    );
}
