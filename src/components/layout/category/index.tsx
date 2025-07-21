import { headerData } from '@/@fakedb/header'
import CategoryMenu from '@/components/layout/category/CategoryMenu'

const Category = () => {
  return (
    <div className='flex flex-row items-center justify-between mb-3'>
      <div className='flex gap-2'>
        <CategoryMenu />
        <ul className='flex gap-2 items-center justify-between hover:cursor-pointer'>
          {headerData.rightContent.map((item, i) => (
            <li className='font-medium' key={i}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <ul className='flex items-center justify-between xl:gap-3'>
        {headerData.leftContent.map((item, i) => (
          <li key={i} className='flex items-center '>
            <item.icon size={18} color='#2362eb' className='bg-background' />
            <p className='font-medium ml-2'>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
