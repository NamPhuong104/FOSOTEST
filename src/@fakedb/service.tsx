interface ServiceData {
  icon: string
  title: string
  desc: string
}

const Services: ServiceData[] = [
  { icon: '/wallet.svg', title: 'Miễn phí vận chuyển', desc: 'Với hóa đơn từ 1 triệu' },
  {
    icon: '/support.svg',
    title: 'Hỗ trợ 24/7',
    desc: 'Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm'
  },
  {
    icon: '/delivery.svg',
    title: 'Giao hàng nhanh 2h',
    desc: 'Trong vòng bán kinh 10km nội thành TP HCM'
  },
  {
    icon: '/box.svg',
    title: '30 ngày đổi trả',
    desc: 'Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển'
  }
]

export { Services }
