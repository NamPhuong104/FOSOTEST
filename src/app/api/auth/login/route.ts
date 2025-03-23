// src/app/api/auth/login/route.ts
import { NextRequest } from 'next/server'
import { z } from 'zod'
import jwt from 'jsonwebtoken'
import { success, badRequest, unauthorized, serverError } from '@/lib/apiHelpers'

// JWT Secret Key - nên đặt trong biến môi trường
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-for-development'

// Zod schema để xác thực dữ liệu đầu vào
const loginSchema = z.object({
  username: z.string().min(1, 'Tên đăng nhập không được để trống'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
})

// Interface cho user data
interface UserData {
  id: string
  username: string
  email: string
  name: string
}

// Interface cho login response
interface LoginResponse {
  token: string
  user: UserData
  expiresAt: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input using Zod
    const result = loginSchema.safeParse(body)

    if (!result.success) {
      // Chuyển lỗi từ Zod sang format validation errors của chúng ta
      const formattedErrors: { [key: string]: string[] } = {}

      Object.entries(result.error.flatten().fieldErrors).forEach(([field, errors]) => {
        formattedErrors[field] = errors as string[]
      })

      return badRequest('Dữ liệu không hợp lệ', formattedErrors)
    }

    const { username, password } = result.data

    // Giả lập xác thực - trong thực tế bạn sẽ kiểm tra với database
    if (username === 'user' && password === '123456a@') {
      // Tạo JWT payload
      const payload = {
        sub: '1', // user ID
        username: username,
        email: `${username}@example.com`,
        name: 'User',
        roles: ['user', 'admin']
      }

      // Ký JWT token
      const token = jwt.sign(
        payload,
        JWT_SECRET,
        { expiresIn: '24h' } // Hết hạn sau 24 giờ
      )

      // Thời gian hết hạn
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)

      // Tạo response data
      const responseData: LoginResponse = {
        token,
        user: {
          id: '1',
          username,
          email: `${username}@example.com`,
          name: 'Admin User'
        },
        expiresAt: expiresAt.toISOString()
      }

      return success<LoginResponse>(responseData, 'Đăng nhập thành công')
    } else {
      return unauthorized('Tên đăng nhập hoặc mật khẩu không chính xác')
    }
  } catch (error) {
    console.error('Login error:', error instanceof Error ? error.message : String(error))
    
return serverError('Lỗi máy chủ, vui lòng thử lại sau')
  }
}
