import { moviesActions } from "./movie-slice"

export const getMoviesData = (page = 1) => {
    return async (dispatch) => {
        const fetchData = async () => {

            dispatch(moviesActions.setLoading(true))

            const res = await fetch(`https://movie-task.vercel.app/api/popular?page=${page}`)
            const data = await res.json()
            return data
        }
        try {
            const result = await fetchData()

            if (result?.data?.page) {
                dispatch(moviesActions.replaceData({
                    movies: result.data.results,
                    random: result.data.results[Math.floor(Math.random() * 20)]
                }))
            }
            dispatch(moviesActions.setLoading(false))
        }
        catch (err) {

        }
    }
}