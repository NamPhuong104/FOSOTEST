import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { LogIn, LogOut, Settings, User2 } from 'lucide-react'

const User = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-1'>
        <Avatar className='w-8 h-8'>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='text-start flex flex-col'>
          <p className='text-sm font-medium'>Nam Phuong</p>
          <p className='text-xs text-muted-foreground'>nam.phuong.104</p>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='mt-2 w-56 bg-white'>
        <DropdownMenuItem>
          <User2 className='mr-1' size={18} /> Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Settings className='mr-1' size={18} />
            Settings
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='w-52 mr-2 bg-white'>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Help & support</DropdownMenuItem>
            <DropdownMenuItem>Help Center</DropdownMenuItem>
            <DropdownMenuItem>Account Status</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogIn className='mr-1' size={18} /> Sign in
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className='mr-1' size={18} /> Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default User
