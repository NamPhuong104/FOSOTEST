import { BadgePercent, Phone, Smartphone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Notification = ({
  discount = 'NEWBIE',
  discountPercent = '10',
  hotline = '0283 760 7607'
}: {
  discount: string
  discountPercent: string
  hotline: string
}) => {
  return (
    <div className='px-2 md:px-5 lg:px-10 2xl:px-40 bg-gradient-to-l from-blue-700 via-sky-400 to-blue-700'>
      <div className='flex justify-between text-white'>
        <span className='flex items-center gap-1'>
          <BadgePercent size={18} />
          Nhập mã <p className='px-1 text-amber-300'>{discount}</p>giảm ngay {discountPercent}% cho
          lần đầu mua hàng.
        </span>
        <div className='flex gap-6'>
          <span className='flex gap-2 items-center'>
            <Phone size={18} />
            Hotline: <p className='text-amber-300'>{hotline}</p>
          </span>
          <Link href='/' className='flex items-center'>
            <Smartphone size={18} /> <p className='pl-1'>Tải ứng dụng</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Notification
