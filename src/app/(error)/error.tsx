'use client'

import Link from 'next/link'

interface GlobalErrorProps {
  error: any
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  const status = error?.status ?? 500

  let title = 'Lỗi máy chủ'
  let message = 'Đã xảy ra lỗi, vui lòng thử lại sau.'
  if (status === 401) {
    title = 'Truy cập bị từ chối'
    message = 'Bạn không có quyền truy cập trang này.'
  } else if (status === 403) {
    title = 'Không tìm thấy trang'
    message = 'Trang bạn tìm kiếm không tồn tại hoặc không có quyền truy cập.'
  } else if (status === 501) {
    title = 'Chức năng chưa được hỗ trợ'
    message = 'Tính năng này đang được phát triển.'
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-6 py-12'>
      <div className='max-w-xl text-center'>
        <h1 className='mb-4 text-4xl font-bold tracking-tight'>{title}</h1>
        <p className='mb-2 text-muted-foreground'>{message}.</p>
        <p className='mb-8 text-muted-foreground'>
          Vui lòng đăng nhập hoặc liên hệ quản trị viên nếu bạn cho rằng đây là lỗi.
        </p>
        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <Link
            href='/login'
            className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
          >
            Đăng nhập
          </Link>
          <Link
            href='/'
            className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}
