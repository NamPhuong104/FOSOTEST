import { Clock, Container, LucideIcon, RefreshCcw, Truck } from 'lucide-react'

interface HeaderData {
  rightContent: {
    title: string
  }[]
  leftContent: {
    icon: LucideIcon
    title: string
  }[]
}

const headerData: HeaderData = {
  rightContent: [
    {
      title: 'Về Chúng Tôi'
    },
    {
      title: 'Bài Viết'
    },
    {
      title: 'Catalog'
    },
    {
      title: 'Liên Hệ'
    }
  ],
  leftContent: [
    {
      icon: Clock,
      title: 'Hỗ Trợ 24/7'
    },
    {
      icon: Container,
      title: 'Miễn Phí Vận Chuyển'
    },
    {
      icon: Truck,
      title: 'Giao Hàng Nhanh 2h'
    },
    {
      icon: RefreshCcw,
      title: '30 Ngày Đổi Trả'
    }
  ]
}

export { headerData }
export type { HeaderData }
