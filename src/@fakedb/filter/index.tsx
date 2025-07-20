interface Filter {
  type: string
  name: string
  options: {
    title: string | number
    isChecked?: boolean
    id?: number
    price?: number
    from?: number
    to?: number
    length?: number
  }[]
}

const filter: Filter[] = [
  {
    type: 'category',
    name: 'Danh mục sản phẩm',
    options: [
      { title: 'Lọc gió Động cơ - Air Filter', id: 1, isChecked: true, length: 24 },
      { title: 'Lọc Nhiên Liệu - Fuel Filter', id: 2, isChecked: true, length: 24 },
      { title: 'Bộ lọc dầu', id: 3, isChecked: true, length: 24 },
      { title: 'Chưa phân loại', id: 4, length: 24 },
      { title: 'Khác', id: 5, length: 24 }
    ]
  },
  {
    type: 'price',
    name: 'Khoảng giá',
    options: [
      { title: 'Dưới', price: 100000 },
      { title: '', from: 100000, to: 300000 },
      { title: '', from: 300000, to: 500000 },
      { title: 'Trên', price: 500000 }
    ]
  },
  {
    type: 'branch',
    name: 'Thương hiệu',
    options: [
      { title: 'Asakashi', length: 24 },
      { title: 'Bosch', length: 24 },
      { title: 'Huyndai', length: 24 }
    ]
  },
  {
    type: 'date',
    name: 'Năm sản xuất',
    options: [
      { title: 2021, length: 24 },
      { title: 2020, length: 24 },
      { title: 2019, length: 24 },
      { title: 2018, length: 24 }
    ]
  },
  {
    type: 'origin',
    name: 'Xuất xứ',
    options: [
      { title: 'Đức', length: 24 },
      { title: 'Nhật Bản', length: 24 },
      { title: 'Trung Quốc', length: 24 }
    ]
  }
]

export { filter }
