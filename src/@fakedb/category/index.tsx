interface CategoryMenu {
  title: string
  productItems: {
    title: string
    href: string
  }[]
  href: string
}

const categoryMenu: CategoryMenu[] = [
  {
    title: 'Bộ Lọc Dầu',
    productItems: [
      {
        title: 'Bộ lọc gió',
        href: '/images/products/product1.png'
      },
      {
        title: 'Bộ lọc gió',
        href: '/images/products/product2.png'
      },
      {
        title: 'Bộ lọc gió',
        href: '/images/products/product3.png'
      },
      {
        title: 'Bộ lọc gió',
        href: '/images/products/product4.png'
      },
      {
        title: 'Bộ lọc gió',
        href: '/images/products/product1.png'
      },
      {
        title: 'Bộ lọc gió',
        href: '/images/products/product2.png'
      }
    ],
    href: '/images/products/product1.png'
  },
  {
    title: 'Bộ Lọc Không Khí',
    productItems: [
      {
        title: 'Bộ lọc không khí',
        href: '/images/products/product5.png'
      },
      {
        title: 'Bộ lọc không khí',
        href: '/images/products/product6.png'
      },
      {
        title: 'Bộ lọc không khí',
        href: '/images/products/product7.png'
      },
      {
        title: 'Bộ lọc không khí',
        href: '/images/products/product8.png'
      }
    ],
    href: '/images/products/product2.png'
  },
  {
    title: 'Bộ Lọc Nhiên Liệu',
    productItems: [
      {
        title: 'Bộ lọc nhiên liệu',
        href: '/images/products/product1.png'
      },
      {
        title: 'Bộ lọc nhiên liệu',
        href: '/images/products/product6.png'
      }
    ],
    href: '/images/products/product3.png'
  },
  {
    title: 'Bộ Lọc Trong Cabin',
    productItems: [
      {
        title: 'Bộ lọc trong cabin',
        href: '/images/products/product8.png'
      }
    ],
    href: '/images/products/product4.png'
  }
]

export { categoryMenu }
