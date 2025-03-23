// Định nghĩa interface cho User
export interface User {
  id: string
  username: string
  email: string
  name?: string
  avatar?: string
}

// Định nghĩa interface cho state trong Redux
export interface UserState {
  user: User | null
  loading: boolean
  error: string | null
}

// Interface cho response error
export interface ErrorResponse {
  message: string
  [key: string]: unknown // Sử dụng unknown thay vì any để tăng tính type-safe
}
