import { footerData } from '@/@fakedb/footer'
import Languages from '@/components/layout/Languages'
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const rightData = footerData.rightContent
  const leftData = footerData.leftContent

  return (
    <div className='flex items-start mt-14 w-full pb-14 justify-between'>
      <div className='flex flex-col'>
        <FooterTitle title={rightData.companyName.toUpperCase()} />
        <div className='my-5 flex flex-col gap-3'>
          <FooterSpan title='Tax code' content={rightData.taxCode} />
          <FooterSpan title='Address' content={rightData.address} />
          <FooterSpan title='Phone number' content={rightData.phoneNumber} />
          <FooterSpan title='Open hour' content={rightData.openingHour} />
        </div>
        <img
          className='w-36 h-12 object-fill'
          src='/images/boCongThuong.png'
          alt='Bộ Công Thương'
        />
      </div>

      <div className='grid grid-cols-2 gap-20'>
        {leftData.map((item, i) => (
          <div key={i}>
            <FooterTitle title={item.title} />
            <div className='my-5 flex flex-col gap-3'>
              {item.des.map(d => (
                <FooterSpan key={d} content={d} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-3'>
        <FooterTitle title='Download App' />
        <Button className='text-start rounded-[8px] py-7 bg-[#1c252e] hover:bg-[#405366]'>
          <img className='w-5 h-5' src='/play-store-fill.svg' alt='play store' />
          <span>
            Get It On <p>Google Play Store</p>
          </span>
        </Button>
        <Button className='text-start rounded-[8px] py-7 bg-blueground'>
          <img className='w-5 h-5' src='/apple-brand.svg' alt='play store' />
          <span>
            Download from <p>Apple App Store</p>
          </span>
        </Button>
        <div className='flex justify-end'>
          <Languages />
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  )
}

export default Footer

const FooterTitle = ({ title }: { title: string }) => {
  return <span className='text-lg font-semibold text-sky-950'>{title}</span>
}

const FooterSpan = ({ title, content }: { title?: string; content?: string }) => {
  return title && content ? (
    <span className='flex gap-1 text-[#647482]'>
      {title}: <p className='text-[#647482] font-medium'>{content}</p>
    </span>
  ) : content ? (
    <p className='text-[#647482] font-medium'>{content}</p>
  ) : null
}
