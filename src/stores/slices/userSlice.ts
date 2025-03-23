import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axiosInstance from '@/lib/axiosInstance'
import { AxiosError } from 'axios'
import { User, UserState, ErrorResponse } from '@/types'

const initialState: UserState = {
  user: null,
  loading: false,
  error: null
}

export const fetchUserProfile = createAsyncThunk('user/fetchProfile', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/user/profile')

    return response.data
  } catch (error) {
    // Sử dụng AxiosError với generic type để chỉ định cấu trúc response error
    const axiosError = error as AxiosError<ErrorResponse>

    return rejectWithValue(axiosError.response?.data?.message || 'Failed to fetch user profile')
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    clearUser: state => {
      state.user = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserProfile.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  }
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer
