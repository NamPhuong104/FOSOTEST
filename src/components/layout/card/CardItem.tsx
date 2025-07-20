import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/utils'

interface CardItemProps {
  isGoodPrice?: boolean
  title: string
  price: number
  oldPrice: number
  discount: number
  isBuy?: boolean
  imgProduct?: string
}

const CardItem = ({
  isGoodPrice,
  title,
  price,
  oldPrice,
  discount,
  isBuy,
  imgProduct
}: CardItemProps) => {
  return (
    <>
      <div className='flex flex-col'>
        <img
          className='rounded-lg mb-1'
          src={imgProduct || '/images/products/product1.png'}
          alt='product'
        />
        {isGoodPrice && (
          <div className='flex mb-3 gap-1 items-center bg-[#ffb922] w-fit rounded-full px-2'>
            <img src='/fire.svg' alt='fire' />
            <p className='text-price font-semibold text-center'>Giá cực sốc</p>
          </div>
        )}
        <p className='line-clamp-2 mb-3 font-semibold'>{title}</p>
        <div>
          <span className='flex items-center gap-1 font-semibold text-price'>
            {formatCurrency(price)} <p className='underline'>đ</p>
          </span>
          <div className='justify-start'>
            <div className='flex items-center gap-1 text-disabled'>
              <span className='flex gap-1 line-through'>{formatCurrency(oldPrice)}</span>
              <p className='underline'>đ</p>
              <p className='text-price'>-{discount}%</p>
            </div>
          </div>
        </div>
      </div>

      {isBuy && (
        <Button variant='outline' className='text-textblue mt-2 h-8 w-full rounded-[8px]'>
          Mua ngay
        </Button>
      )}
    </>
  )
}

export default CardItem
