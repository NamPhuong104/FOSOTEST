'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.pageYOffset > 300) // show after scrolling 300px
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <Button
      onClick={scrollToTop}
      className='fixed bottom-4 right-4 p-3 rounded-full shadow-lg bg-white hover:bg-gray-100'
      variant='outline'
    >
      <ArrowUp size={20} />
    </Button>
  )
}
