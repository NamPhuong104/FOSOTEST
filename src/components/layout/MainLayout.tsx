'use client'

import Loading from '@/app/loading'
import Header from '@/components/layout/Header'
import { Suspense, useEffect, useState } from 'react'
import Footer from '@/components/layout/Footer'
import Notification from '@/components/layout/Notification'
import PageLayout from '@/components/layout/PageLayout'
import Store from '@/components/layout/Store'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted ? (
        <div className='flex-1 pt-0 gap-8 flex min-h-screen flex-col bg-white'>
          <Notification discount='NEWBIE' discountPercent='10' hotline='0283 760 7607' />
          <div>
            <PageLayout>
              <Header />
            </PageLayout>

            <Suspense fallback={<Loading />}>
              <main className='flex-1 pt-0 flex flex-col gap-8'>{children}</main>
            </Suspense>

            <Store />
            <PageLayout>
              <Footer />
            </PageLayout>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
