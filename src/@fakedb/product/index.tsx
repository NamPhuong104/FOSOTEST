interface ProductData {
  title: string
  isGoodPrice: boolean
  price: number
  oldPrice: number
  discount: number
  isBuy: boolean
  imgProduct: string
}

const products: ProductData[] = [
  {
    title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)',
    isGoodPrice: true,
    price: 100000,
    oldPrice: 300000,
    discount: 17,
    isBuy: true,
    imgProduct: '/images/products/product1.png'
  },
  {
    title: 'Sản phẩm 2',
    isGoodPrice: false,
    price: 250000,
    oldPrice: 270000,
    discount: 7,
    isBuy: true,
    imgProduct: '/images/products/product2.png'
  },
  {
    title: 'Sản phẩm 3',
    isGoodPrice: true,
    price: 180000,
    oldPrice: 210000,
    discount: 14,
    isBuy: false,
    imgProduct: '/images/products/product3.png'
  },
  {
    title: 'Sản phẩm 4',
    isGoodPrice: false,
    price: 320000,
    oldPrice: 350000,
    discount: 8,
    isBuy: true,
    imgProduct: '/images/products/product4.png'
  },
  {
    title: 'Sản phẩm 5',
    isGoodPrice: true,
    price: 410000,
    oldPrice: 430000,
    discount: 5,
    isBuy: false,
    imgProduct: '/images/products/product5.png'
  },
  {
    title: 'Sản phẩm 6',
    isGoodPrice: false,
    price: 150000,
    oldPrice: 170000,
    discount: 11,
    isBuy: true,
    imgProduct: '/images/products/product6.png'
  },
  {
    title: 'Sản phẩm 7',
    isGoodPrice: true,
    price: 220000,
    oldPrice: 250000,
    discount: 12,
    isBuy: false,
    imgProduct: '/images/products/product7.png'
  },
  {
    title: 'Sản phẩm 8',
    isGoodPrice: false,
    price: 330000,
    oldPrice: 360000,
    discount: 9,
    isBuy: true,
    imgProduct: '/images/products/product8.png'
  },
  {
    title: 'Sản phẩm 9',
    isGoodPrice: true,
    price: 290000,
    oldPrice: 320000,
    discount: 10,
    isBuy: false,
    imgProduct: '/images/products/product1.png'
  },
  {
    title: 'Sản phẩm 10',
    isGoodPrice: false,
    price: 120000,
    oldPrice: 150000,
    discount: 20,
    isBuy: true,
    imgProduct: '/images/products/product2.png'
  },
  {
    title: 'Sản phẩm 11',
    isGoodPrice: true,
    price: 270000,
    oldPrice: 300000,
    discount: 9,
    isBuy: false,
    imgProduct: '/images/products/product3.png'
  },
  {
    title: 'Sản phẩm 12',
    isGoodPrice: false,
    price: 350000,
    oldPrice: 370000,
    discount: 5,
    isBuy: true,
    imgProduct: '/images/products/product4.png'
  },
  {
    title: 'Sản phẩm 13',
    isGoodPrice: true,
    price: 200000,
    oldPrice: 230000,
    discount: 13,
    isBuy: false,
    imgProduct: '/images/products/product5.png'
  },
  {
    title: 'Sản phẩm 14',
    isGoodPrice: false,
    price: 310000,
    oldPrice: 340000,
    discount: 8,
    isBuy: true,
    imgProduct: '/images/products/product6.png'
  },
  {
    title: 'Sản phẩm 15',
    isGoodPrice: true,
    price: 400000,
    oldPrice: 420000,
    discount: 4,
    isBuy: false,
    imgProduct: '/images/products/product7.png'
  },
  {
    title: 'Sản phẩm 16',
    isGoodPrice: false,
    price: 160000,
    oldPrice: 190000,
    discount: 15,
    isBuy: true,
    imgProduct: '/images/products/product8.png'
  },
  {
    title: 'Sản phẩm 17',
    isGoodPrice: true,
    price: 230000,
    oldPrice: 260000,
    discount: 11,
    isBuy: false,
    imgProduct: '/images/products/product1.png'
  },
  {
    title: 'Sản phẩm 18',
    isGoodPrice: false,
    price: 340000,
    oldPrice: 370000,
    discount: 8,
    isBuy: true,
    imgProduct: '/images/products/product2.png'
  },
  {
    title: 'Sản phẩm 19',
    isGoodPrice: true,
    price: 300000,
    oldPrice: 330000,
    discount: 9,
    isBuy: false,
    imgProduct: '/images/products/product3.png'
  },
  {
    title: 'Sản phẩm 20',
    isGoodPrice: false,
    price: 130000,
    oldPrice: 160000,
    discount: 18,
    isBuy: true,
    imgProduct: '/images/products/product4.png'
  },
  {
    title: 'Sản phẩm 21',
    isGoodPrice: true,
    price: 280000,
    oldPrice: 310000,
    discount: 10,
    isBuy: false,
    imgProduct: '/images/products/product5.png'
  },
  {
    title: 'Sản phẩm 22',
    isGoodPrice: false,
    price: 360000,
    oldPrice: 390000,
    discount: 8,
    isBuy: true,
    imgProduct: '/images/products/product6.png'
  },
  {
    title: 'Sản phẩm 23',
    isGoodPrice: true,
    price: 210000,
    oldPrice: 240000,
    discount: 12,
    isBuy: false,
    imgProduct: '/images/products/product7.png'
  },
  {
    title: 'Sản phẩm 24',
    isGoodPrice: false,
    price: 320000,
    oldPrice: 350000,
    discount: 9,
    isBuy: true,
    imgProduct: '/images/products/product8.png'
  },
  {
    title: 'Sản phẩm 25',
    isGoodPrice: true,
    price: 290000,
    oldPrice: 320000,
    discount: 10,
    isBuy: false,
    imgProduct: '/images/products/product1.png'
  },
  {
    title: 'Sản phẩm 26',
    isGoodPrice: false,
    price: 140000,
    oldPrice: 170000,
    discount: 17,
    isBuy: true,
    imgProduct: '/images/products/product2.png'
  },
  {
    title: 'Sản phẩm 27',
    isGoodPrice: true,
    price: 260000,
    oldPrice: 290000,
    discount: 10,
    isBuy: false,
    imgProduct: '/images/products/product3.png'
  },
  {
    title: 'Sản phẩm 28',
    isGoodPrice: false,
    price: 370000,
    oldPrice: 400000,
    discount: 8,
    isBuy: true,
    imgProduct: '/images/products/product4.png'
  },
  {
    title: 'Sản phẩm 29',
    isGoodPrice: true,
    price: 220000,
    oldPrice: 250000,
    discount: 12,
    isBuy: false,
    imgProduct: '/images/products/product5.png'
  },
  {
    title: 'Sản phẩm 30',
    isGoodPrice: false,
    price: 330000,
    oldPrice: 360000,
    discount: 9,
    isBuy: true,
    imgProduct: '/images/products/product6.png'
  },
  {
    title: 'Sản phẩm 31',
    isGoodPrice: true,
    price: 410000,
    oldPrice: 440000,
    discount: 7,
    isBuy: false,
    imgProduct: '/images/products/product7.png'
  },
  {
    title: 'Sản phẩm 32',
    isGoodPrice: false,
    price: 170000,
    oldPrice: 200000,
    discount: 15,
    isBuy: true,
    imgProduct: '/images/products/product8.png'
  },
  {
    title: 'Sản phẩm 33',
    isGoodPrice: true,
    price: 240000,
    oldPrice: 270000,
    discount: 11,
    isBuy: false,
    imgProduct: '/images/products/product1.png'
  },
  {
    title: 'Sản phẩm 34',
    isGoodPrice: false,
    price: 350000,
    oldPrice: 380000,
    discount: 8,
    isBuy: true,
    imgProduct: '/images/products/product2.png'
  },
  {
    title: 'Sản phẩm 35',
    isGoodPrice: true,
    price: 310000,
    oldPrice: 340000,
    discount: 9,
    isBuy: false,
    imgProduct: '/images/products/product3.png'
  },
  {
    title: 'Sản phẩm 36',
    isGoodPrice: false,
    price: 150000,
    oldPrice: 180000,
    discount: 16,
    isBuy: true,
    imgProduct: '/images/products/product4.png'
  },
  {
    title: 'Sản phẩm 37',
    isGoodPrice: true,
    price: 270000,
    oldPrice: 300000,
    discount: 10,
    isBuy: false,
    imgProduct: '/images/products/product5.png'
  },
  {
    title: 'Sản phẩm 38',
    isGoodPrice: false,
    price: 380000,
    oldPrice: 410000,
    discount: 7,
    isBuy: true,
    imgProduct: '/images/products/product6.png'
  },
  {
    title: 'Sản phẩm 39',
    isGoodPrice: true,
    price: 230000,
    oldPrice: 260000,
    discount: 11,
    isBuy: false,
    imgProduct: '/images/products/product7.png'
  },
  {
    title: 'Sản phẩm 40',
    isGoodPrice: false,
    price: 340000,
    oldPrice: 370000,
    discount: 8,
    isBuy: true,
    imgProduct: '/images/products/product8.png'
  },
  {
    title: 'Sản phẩm 41',
    isGoodPrice: true,
    price: 300000,
    oldPrice: 330000,
    discount: 9,
    isBuy: false,
    imgProduct: '/images/products/product1.png'
  },
  {
    title: 'Sản phẩm 42',
    isGoodPrice: false,
    price: 120000,
    oldPrice: 150000,
    discount: 20,
    isBuy: true,
    imgProduct: '/images/products/product2.png'
  },
  {
    title: 'Sản phẩm 43',
    isGoodPrice: true,
    price: 280000,
    oldPrice: 310000,
    discount: 10,
    isBuy: false,
    imgProduct: '/images/products/product3.png'
  },
  {
    title: 'Sản phẩm 44',
    isGoodPrice: false,
    price: 360000,
    oldPrice: 390000,
    discount: 8,
    isBuy: true,
    imgProduct: '/images/products/product4.png'
  },
  {
    title: 'Sản phẩm 45',
    isGoodPrice: true,
    price: 210000,
    oldPrice: 240000,
    discount: 12,
    isBuy: false,
    imgProduct: '/images/products/product5.png'
  },
  {
    title: 'Sản phẩm 46',
    isGoodPrice: false,
    price: 320000,
    oldPrice: 350000,
    discount: 9,
    isBuy: true,
    imgProduct: '/images/products/product6.png'
  },
  {
    title: 'Sản phẩm 47',
    isGoodPrice: true,
    price: 290000,
    oldPrice: 320000,
    discount: 10,
    isBuy: false,
    imgProduct: '/images/products/product7.png'
  },
  {
    title: 'Sản phẩm 48',
    isGoodPrice: false,
    price: 140000,
    oldPrice: 170000,
    discount: 17,
    isBuy: true,
    imgProduct: '/images/products/product8.png'
  },
  {
    title: 'Sản phẩm 49',
    isGoodPrice: true,
    price: 260000,
    oldPrice: 290000,
    discount: 10,
    isBuy: false,
    imgProduct: '/images/products/product1.png'
  },
  {
    title: 'Sản phẩm 50',
    isGoodPrice: false,
    price: 370000,
    oldPrice: 400000,
    discount: 8,
    isBuy: true,
    imgProduct: '/images/products/product2.png'
  }
]

export default products
