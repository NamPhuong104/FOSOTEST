import { headerData } from '@/@fakedb/header'
import CategoryMenu from '@/components/layout/category/CategoryMenu'

const Category = () => {
  return (
    <div className='flex flex-row items-center justify-between mb-3'>
      <div className='flex gap-2'>
        <CategoryMenu />
        <ul className='flex gap-2 items-center justify-between hover:cursor-pointer'>
          {headerData.rightContent.map((item, i) => (
            <li className='font-medium relative group hover:text-gray-500' key={i}>
              {item.title}
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
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
