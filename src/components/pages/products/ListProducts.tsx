'use client'

import products from '@/@fakedb/product'
import CardItem from '@/components/layout/card/CardItem'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ArrowRight, Check, ChevronsUpDown } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

const PAGE_SIZE = 12

const ListProducts = () => {
  const [active, setActive] = useState<'relevance' | 'best' | 'newest' | 'featured'>('relevance')
  const [page, setPage] = useState(1)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  const visibleProducts = products.slice(0, page * PAGE_SIZE)
  const hasMore = visibleProducts.length < products.length

  const onIntersect: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      if (entry.isIntersecting && hasMore) setPage(p => p + 1)
    },
    [hasMore]
  )

  useEffect(() => {
    if (!loadMoreRef.current) return
    const observer = new IntersectionObserver(onIntersect, { rootMargin: '200px' })
    observer.observe(loadMoreRef.current)

    return () => observer.disconnect()
  }, [onIntersect])

  const tabs = [
    { key: 'relevance', label: 'Liên quan' },
    { key: 'best', label: 'Bán chạy' },
    { key: 'newest', label: 'Mới nhất' },
    { key: 'featured', label: 'Nổi bật' }
  ] as const

  return (
    <div className='flex flex-col items-center gap-2 mb-2'>
      <div className='flex items-center justify-between w-full'>
        <p className='w-[20%]'>Danh sách sản phẩm</p>
        <div className='flex items-center justify-between w-[75%]'>
          <span>Sắp xếp theo</span>

          {tabs.map(tab => {
            const isActive = active === tab.key

            return (
              <Button
                key={tab.key}
                variant='outline'
                defaultValue='relevance'
                onClick={() => setActive(tab.key)}
                className={`rounded-[8px] px-3 py-1 ${isActive && 'text-blueground outline outline-1 outline-blueground'}`}
              >
                {tab.label}
                {isActive && <Check size={18} color='blue' />}
              </Button>
            )
          })}

          <ComboboxFilter />
        </div>
      </div>
      <div className='w-full p-1 grid grid-cols-4 min-[1920px]:grid-cols-5 gap-2'>
        {visibleProducts.map((product, i) => (
          <Card key={i} className='w-52 h-auto p-4'>
            <CardItem {...product} />
          </Card>
        ))}
      </div>
      <div ref={loadMoreRef} className='h-8 flex justify-center items-center text-sm text-gray-500'>
        {hasMore ? 'Scroll để tải thêm...' : '— Hết sản phẩm —'}
      </div>
    </div>
  )
}

export default ListProducts

const filterPrices = [
  {
    value: '1',
    label: (
      <div className='flex items-center gap-2'>
        <span>Thấp</span>
        <ArrowRight color='blue' size={18} />
        <span>Cao</span>
      </div>
    )
  },
  {
    value: '2',
    label: (
      <span className='flex items-center  gap-2'>
        <span>Cao</span>
        <ArrowRight color='blue' size={18} />
        <span>Thấp</span>
      </span>
    )
  }
]

const ComboboxFilter = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[170px] justify-between rounded-[8px]'
        >
          {value ? (
            <span className='flex items-center'>
              <span className='mr-1'>Giá: </span>
              {filterPrices.find(price => price.value === value)?.label}
            </span>
          ) : (
            'Giá: '
          )}
          <ChevronsUpDown className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[170px] p-0 rounded-[8px]'>
        <Command>
          <CommandList>
            <CommandGroup>
              {filterPrices.map(price => (
                <CommandItem
                  key={price.value}
                  value={price.value}
                  onSelect={currentValue => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  {price.label}
                  <Check
                    className={`ml-auto ${value === price.value ? 'opacity-100' : 'opacity-0'}`}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
