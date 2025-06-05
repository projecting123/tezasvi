import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Flex } from "@radix-ui/themes";
import { DialogHeader } from "../ui/dialog";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
export function MobileProductSearch() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Search color='white' className='cursor-pointer' />
      </DialogTrigger>
      <DialogContent className="w-dvw h-dvh max-w-full rounded-none">
        <Flex direction={'column'}>
          <DialogHeader>
            <DialogTitle className='text-start'>Tezasvi</DialogTitle>
            <Separator />
            <Input type='text' name='search' autoComplete='off' placeholder='Search for products...' aria-label='Search for products...' className='h-10 my-4' />
          </DialogHeader>
          <div className="">
            Products will be shown here.
          </div>
        </Flex>
      </DialogContent>
    </Dialog>
  );
}