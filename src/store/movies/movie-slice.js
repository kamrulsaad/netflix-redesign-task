import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        random: {},
        img_url: "https://image.tmdb.org/t/p/original",
        loading: false
    },
    reducers: {
        replaceData(state, action) {
            state.movies = action.payload.movies
            state.random = action.payload.random
        },
        setLoading(state, action) {
            state.followingLoading = action.payload
        }
    }
})

export const moviesActions = moviesSlice.actions

export default moviesSlice