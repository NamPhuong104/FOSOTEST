import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axiosInstance from '@/lib/axiosInstance'
import { setToken, removeToken } from '@/lib/auth'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/types'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  isAuthenticated: false,
  loading: false,
  error: null
}

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/login', { username, password })
      
return response.data
    } catch (error) {
      // Sử dụng AxiosError với generic type để chỉ định cấu trúc response error
      const axiosError = error as AxiosError<ErrorResponse>
      
return rejectWithValue(axiosError.response?.data?.message || 'Login failed')
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  removeToken()
  
return true
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token
      state.isAuthenticated = true
      setToken(action.payload.token)
    },
    clearCredentials: state => {
      state.token = null
      state.isAuthenticated = false
      removeToken()
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token
        state.isAuthenticated = true
        state.loading = false
        setToken(action.payload.token)
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(logout.fulfilled, state => {
        state.token = null
        state.isAuthenticated = false
      })
  }
})

export const { setCredentials, clearCredentials } = authSlice.actions

export default authSlice.reducer
