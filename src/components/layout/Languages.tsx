'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ArrowDown, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const Languages = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className='flex items-center gap-1 cursor-pointer'>
        <Image alt='VN Language' width={30} height={30} src='/images/vnlg.png' />
        <span>VI</span>
        {open ? <ArrowUp size={18} color='blue' /> : <ArrowDown size={18} color='blue' />}
      </DropdownMenuTrigger>

      <DropdownMenuContent className='mt-2 w-10 bg-white'>
        <DropdownMenuItem>ENG</DropdownMenuItem>
        <DropdownMenuItem>VI</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Languages
