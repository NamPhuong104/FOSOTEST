import * as React from 'react'

import { cn } from '@/utils'
import { LucideIcon } from 'lucide-react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon
  endIcon?: LucideIcon
  searchIcon?: LucideIcon
}

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, searchIcon, ...props }, ref) => {
    const StartIcon = startIcon
    const EndIcon = endIcon
    const SearchIcon = searchIcon

    return (
      <div className='w-full relative'>
        {StartIcon && (
          <div className='absolute left-1.5 top-1/2 transform -translate-y-1/2'>
            <StartIcon size={18} className='text-muted-foreground' />
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background py-2 px-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
            startIcon ? 'pl-8' : '',
            endIcon ? 'pr-8' : '',
            className
          )}
          ref={ref}
          {...props}
        />

        {SearchIcon && (
          <div className='absolute right-[18%] xl:right-[10%] top-1/2 transform -translate-y-1/2 cursor-pointer'>
            <SearchIcon size={20} />
          </div>
        )}

        {EndIcon && (
          <div className='absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-blueground rounded-full cursor-pointer'>
            <EndIcon className='text-white' size={18} />
          </div>
        )}
      </div>
    )
  }
)
Search.displayName = 'Search'

export { Search }
