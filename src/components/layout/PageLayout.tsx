'use client'

import Loading from '@/app/loading'
import { Suspense, useEffect, useState } from 'react'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted ? (
        <Suspense fallback={<Loading />}>
          <main className='px-2 md:px-5 lg:px-10 2xl:px-40'>{children}</main>
        </Suspense>
      ) : (
        <Loading />
      )}
    </>
  )
}
