import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'followings',
    initialState: {
        movies: [],
        loading: false
    },
    reducers: {
        replaceData(state, action) {
            state.movies = action.payload
        },
        setLoading(state, action) {
            state.followingLoading = action.payload
        }
    }
})

export const moviesActions = moviesSlice.actions

export default moviesSlice