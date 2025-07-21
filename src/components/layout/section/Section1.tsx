import CardItem from '@/components/layout/card/CardItem'
import Image from 'next/image'

import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const Section1 = () => {
  return (
    <div className='mt-5'>
      <div className='w-auto lg:h-[500px] relative'>
        <Image
          fill
          src='/images/banner.png'
          alt='banner'
          className='lg:object-contain xl:object-fill  rounded-t-xl'
        />
      </div>
      <div className='w-full'>
        <Carousel
          opts={{
            align: 'start'
          }}
          className='w-full bg-blueground p-10 rounded-b-xl'
        >
          <CarouselContent>
            {Array.from({ length: 30 }).map((_, index) => (
              <CarouselItem key={index} className='basis-1/3 2xl:basis-1/5 min-[1920px]:basis-1/6 '>
                <div className='p-1'>
                  <Card className='w-52 h-auto p-4 hover:cursor-pointer hover:bg-blue-100'>
                    <CardItem
                      discount={100}
                      oldPrice={300000}
                      price={100000}
                      title='Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)'
                      isBuy={true}
                      isGoodPrice={true}
                      imgProduct='/images/products/product7.png'
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-1' />
          <CarouselNext className='right-1' />
        </Carousel>
      </div>
    </div>
  )
}

export default Section1
