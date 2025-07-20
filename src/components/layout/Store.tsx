import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const Store = () => {
  return (
    <div className='px-2 md:px-5 lg:px-10 2xl:px-40 bg-sky-100'>
      <div className='flex items-center justify-between h-20'>
        <div className='flex items-center font-semibold text-lg gap-3'>
          <img src='/map.svg' alt='map' />
          Xem hệ thống 88 cửa hàng trên toàn quốc
        </div>
        <Button variant='outline' className='rounded-full flex gap-3 items-center text-blueground'>
          Xem ngay <ArrowRight />
        </Button>
      </div>
    </div>
  )
}

export default Store
