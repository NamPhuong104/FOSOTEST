import { Search } from '@/components/ui/search'
import { Camera, SearchIcon } from 'lucide-react'
import { CartIconWithBadge } from '@/components/layout/CartDropdown'
import User from '@/components/layout/User'
import Image from 'next/image'
import Category from '@/components/layout/category'
import Languages from '@/components/layout/Languages'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-nowrap items-center justify-between'>
        <div className='relative -ml-2 h-32 w-60 overflow-hidden'>
          <Link href='/'>
            <Image src='/images/logo.png' alt='Sun1fil Logo' fill />
          </Link>
        </div>
        <div className='w-[40%] 2xl:w-[55%]'>
          <Search
            className='h-12'
            placeholder='Tìm sản phẩm'
            searchIcon={Camera}
            endIcon={SearchIcon}
          />
        </div>
        <div className='flex items-center gap-8 justify-between'>
          <Languages />

          <CartIconWithBadge count={12} />

          <User />
        </div>
      </div>
      <Category />
    </div>
  )
}

export default Header
