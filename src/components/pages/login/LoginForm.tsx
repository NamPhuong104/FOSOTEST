'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { loginSchema, type LoginValues } from '@/utils/validation'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { setToken, removeToken, isTokenValid } from '@/lib/auth'
import { useToast } from '@/hooks/useToast'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // Lấy callbackUrl từ query params (nếu có)
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  // Kiểm tra token khi component được mount
  useEffect(() => {
    const checkAuth = () => {
      if (isTokenValid()) {
        console.log('Token hợp lệ')
        router.push(callbackUrl)
      } else {
        console.log('Token không hợp lệ hoặc hết hạn')
        removeToken()
      }
    }

    checkAuth()
  }, [router, callbackUrl])

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const handleLogin = async (userData: LoginValues) => {
    setIsLoading(true)
    try {
      // Gọi API đăng nhập
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      const data = await response.json()

      if (response.ok) {
        // Lưu token
        setToken(data.token)

        toast({
          title: 'Đăng nhập thành công',
          description: 'Chào mừng bạn quay trở lại!',
          variant: 'default'
        })

        // Chuyển hướng đến callbackUrl hoặc dashboard
        router.push(callbackUrl)
      } else {
        // Xử lý lỗi
        toast({
          title: 'Đăng nhập thất bại',
          description: data.message || 'Vui lòng kiểm tra thông tin đăng nhập',
          variant: 'destructive'
        })
      }
    } catch (error) {
      console.error('Login error:', error)
      toast({
        title: 'Lỗi kết nối',
        description: 'Không thể kết nối đến máy chủ. Vui lòng thử lại sau.',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='mx-auto max-w-sm space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold'>Đăng nhập</h1>
        <p className='text-muted-foreground'>Nhập thông tin đăng nhập để truy cập tài khoản của bạn</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className='space-y-4'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên đăng nhập</FormLabel>
                <FormControl>
                  <Input placeholder='username' {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='••••••••'
                      {...field}
                      disabled={isLoading}
                    />
                    <button
                      type='button'
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                      onClick={togglePasswordVisibility}
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </FormControl>
                <div className='flex items-center justify-between'>
                  <FormMessage />
                  <Link href='/forgot-password' className='text-sm text-primary hover:underline'>
                    Quên mật khẩu?
                  </Link>
                </div>
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full' disabled={isLoading}>
            {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
          </Button>

          <div className='mt-4 text-center'>
            <p className='text-sm text-muted-foreground'>
              Chưa có tài khoản?{' '}
              <Link href='/register' className='text-primary hover:underline'>
                Đăng ký
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  )
}
