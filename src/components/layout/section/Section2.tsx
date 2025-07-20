import Filter from '@/components/pages/filter/Filter'
import ListProducts from '@/components/pages/products/ListProducts'
import React from 'react'

const Section2 = () => {
  return (
    <div className='flex flex-row gap-3 mt-3'>
      <div className='w-[25%]'>
        <Filter />
      </div>
      <div className='w-[75%]'>
        <ListProducts />
      </div>
    </div>
  )
}

export default Section2
