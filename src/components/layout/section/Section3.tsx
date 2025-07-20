import { Services } from '@/@fakedb/service'
import { Card } from '@/components/ui/card'
import React from 'react'

const Section3 = () => {
  return (
    <div className='py-7 grid grid-cols-4 gap-2'>
      {Services.map((item, i) => (
        <Card key={i} className='px-1 py-1 flex flex-row items-center gap-1'>
          <img src={item.icon} alt={item.title} />
          <div>
            <span className='font-semibold'>{item.title}</span>
            <p className='text-sm text-disabled'>{item.desc}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Section3
