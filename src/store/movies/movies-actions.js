import { moviesActions } from "./movie-slice"

export const getMoviesData = () => {
    return async (dispatch) => {
        const fetchData = async () => {

            dispatch(moviesActions.setLoading(true))

            const res = await fetch("https://movie-task.vercel.app/api/popular?page=1")
            const data = await res.json()
            return data
        }
        try {
            const result = await fetchData()

            console.log(result);

            if (result.status === "success") {
                dispatch(moviesActions.replaceData({
                    movies: result.data.followings.data,
                }))
            }
            dispatch(moviesActions.setLoading(false))
        }
        catch (err) {

        }
    }
}