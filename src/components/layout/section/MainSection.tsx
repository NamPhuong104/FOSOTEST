import Section1 from '@/components/layout/section/Section1'
import Section2 from '@/components/layout/section/Section2'
import Section3 from '@/components/layout/section/Section3'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import Link from 'next/link'

const MainSection = () => {
  return (
    <div className='min-h-screen bg-background'>
      <div className='flex flex-col gap-3 px-2 md:px-5 lg:px-10 2xl:px-40'>
        <Breadcrumb className='mt-5'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='/'>Trang chủ</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='/' className='text-blueground font-medium'>
                  Sản phẩm
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  )
}

export default MainSection
