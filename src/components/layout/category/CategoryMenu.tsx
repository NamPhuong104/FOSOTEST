import { categoryMenu } from '@/@fakedb/category'
import CardItem from '@/components/layout/card/CardItem'
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
import { AlignJustify, ChevronDown, ChevronsRight } from 'lucide-react'
import Image from 'next/image'

const CategoryMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='text-white rounded'>
        <div className='bg-blueground px-2 h-10 w-full flex items-center gap-1 rounded-[8px]'>
          <AlignJustify size={18} />
          <p className='items-center'>Danh mục sản phẩm</p>
          <ChevronDown size={18} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-60 bg-white'>
        {categoryMenu.map((cat, idx) => (
          <DropdownMenuSub key={idx}>
            <DropdownMenuSubTrigger className='flex justify-between'>
              <div className='flex items-center gap-1 py-2'>
                <Image width={30} height={30} src={cat.href} alt={cat.title} />
                <span className='font-semibold'>{cat.title}</span>
              </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className='ml-2 gap-3 bg-white'>
              <div className='grid grid-cols-3 '>
                {cat.productItems.map((item, j) => (
                  <DropdownMenuItem
                    key={j}
                    className='flex items-center w-60 my-1 gap-2 px-4 py-3 rounded-[8px] bg-white '
                  >
                    <Image width={30} height={30} src={item.href} alt={item.title} />
                    <span className='w-full text-base font-semibold'>{item.title}</span>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator className='mt-1' />
              <div className='cursor-pointer'>
                <div className='flex items-center justify-between px-2'>
                  <span className='font-semibold text-2xl'>Sản Phẩm Bán Chạy</span>
                  <p className='flex items-center gap-1 text-blueground font-medium'>
                    Xem tất cả <ChevronsRight size={18} color='blue' />
                  </p>
                </div>
                <div className='grid grid-cols-4 gap-4 my-3'>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className='w-44 bg-white rounded-md hover:bg-gray-200 hover:rounded-md p-2'
                    >
                      <CardItem
                        discount={10}
                        oldPrice={329000}
                        price={299000}
                        title='Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CategoryMenu
