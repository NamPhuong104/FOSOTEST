import { QueryClient } from '@tanstack/react-query'

// Default stale times by query type
export const staleTimeConfig = {
  user: 5 * 60 * 1000, // 5 minutes
  static: 24 * 60 * 60 * 1000, // 24 hours
  dynamic: 30 * 1000 // 30 seconds
}

// Create a client with default options
export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: staleTimeConfig.dynamic,
        retry: 1,
        refetchOnWindowFocus: false
      }
    }
  })
}

// Commonly used query keys
export const queryKeys = {
  user: ['user'],
  userById: (id: string) => ['user', id],
  posts: ['posts'],
  postById: (id: string) => ['posts', id]
}
