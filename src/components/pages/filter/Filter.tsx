import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { filter } from '@/@fakedb/filter'
import { Button } from '@/components/ui/button'

const Filter = () => {
  const allSections = filter.map(section => section.type)

  return (
    <Card className='rounded-lg p-4 space-y-2'>
      <div className='flex items-center gap-2'>
        <img src='/filtericon.svg' alt='Filter icon' />
        <h2 className='text-2xl text-blueground font-semibold'>Bộ Lọc</h2>
      </div>
      <Separator />

      <Accordion type='multiple' defaultValue={allSections} className='space-y-1 '>
        {filter.map(section => (
          <AccordionItem key={section.type} value={section.type} className='border-none'>
            <AccordionTrigger className='text-lg font-semibold hover:no-underline'>
              {section.name}
            </AccordionTrigger>

            <AccordionContent className='pt-2'>
              {section.type === 'price' ? (
                <div className='space-y-2'>
                  {section.options.map(opt => (
                    <Button
                      key={`${section.type}-${opt.from ?? opt.title}`}
                      variant='outline'
                      className='w-full rounded-[8px] justify-center'
                    >
                      {opt.title
                        ? `${opt.title} ${opt.price!.toLocaleString('en-US')} đ`
                        : `${opt.from!.toLocaleString('en-US')} đ - ${opt.to!.toLocaleString('en-US')} đ`}
                    </Button>
                  ))}
                </div>
              ) : (
                <div className='space-y-2'>
                  {section.options.map(opt => {
                    const id = `${section.type}-${opt.id ?? opt.title}`

                    return (
                      <div key={id} className='flex items-center gap-2'>
                        <Checkbox
                          className='rounded-[4px]'
                          id={id}
                          defaultChecked={!!opt.isChecked}
                        />
                        <Label htmlFor={id} className='flex-1 text-base'>
                          {opt.title}
                          {opt.length !== undefined && (
                            <span className='text-disabled ml-1'>({opt.length})</span>
                          )}
                        </Label>
                      </div>
                    )
                  })}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  )
}

export default Filter
