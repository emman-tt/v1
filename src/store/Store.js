import { configureStore, createSlice } from '@reduxjs/toolkit'

const PostSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    users: [],
    status: 'loading',
    errorMessage: '',
    searchValue: ''
  },
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload
      state.status = 'loaded'
    },
    addUsers: (state, action) => {
      state.users = action.payload
    },
    setError: (state, action) => {
      state.status = 'error'
      state.errorMessage = action.payload
    },
    searchFilter: (state, action) => {
      state.searchValue = action.payload
    }
  }
})

export const { addPosts, addUsers, setError, searchFilter } = PostSlice.actions

export const store = configureStore({
  reducer: {
    posts: PostSlice.reducer
  }
})
