import { Badge } from '@/components/ui/badge'
import { ShoppingBasket } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import CardItem from '@/components/layout/card/CardItem'

export function CartIconWithBadge({ count }: { count: number }) {
  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger asChild>
        <div className='relative w-8 h-8 cursor-pointer'>
          <ShoppingBasket className='w-8 h-8 text-blueground' />
          {count > 0 && (
            <Badge
              variant='destructive'
              className='absolute -top-2 -right-2 rounded-full h-5 w-5 px-1 text-center'
            >
              {count}
            </Badge>
          )}
        </div>
      </HoverCardTrigger>

      <HoverCardContent className='bg-white mt-2'>
        <CardItem
          title='Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)'
          price={299000}
          oldPrice={239000}
          discount={10}
          isBuy={true}
          isGoodPrice={true}
        />
      </HoverCardContent>
    </HoverCard>
  )
}
