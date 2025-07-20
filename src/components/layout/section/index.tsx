import Loading from '@/app/loading'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const MainSection = dynamic(() => import('./MainSection'), { ssr: true })
const index = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MainSection />
    </Suspense>
  )
}

export default index
