import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './movies/movie-slice'

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer
  },
})