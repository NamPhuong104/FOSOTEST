interface FooterData {
  rightContent: {
    companyName: string
    taxCode: string
    address: string
    phoneNumber: string
    openingHour: string
  }
  leftContent: {
    title: string
    des: string[]
  }[]
}

const footerData: FooterData = {
  rightContent: {
    companyName: 'Viet Hung Auto Production Trading Joint Stock Company',
    taxCode: '0305094228',
    address: '13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.',
    phoneNumber: '0283 760 7607',
    openingHour: '09:00 - 22:00 from Mon - Fri'
  },
  leftContent: [
    { title: 'Sitemap', des: ['About', 'Article', 'Cart', 'Contact'] },
    { title: 'Legal', des: ['__ Privacy Policy', 'Cookie policy', 'Delivery policy', 'FAQs'] }
  ]
}

export { footerData }
