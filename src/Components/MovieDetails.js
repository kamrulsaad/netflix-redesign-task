import React from 'react'
import { useSelector } from 'react-redux';
import { FaPlay } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

const MovieDetails = () => {

    const {id} = useParams()

    const baseUrl = useSelector(state => state.movies.img_url)

    const url = `https://movie-task.vercel.app/api/movie?movieId=${id}`

    const { data, isLoading } = useQuery(['data?.data', id], () =>
        fetch(url).then(res =>
            res.json()
        )
    )

    if(isLoading) return <Loading></Loading>


    return (
        <div className="flex flex-col space-y-1 py-16 md:space-y-4 lg:h-[90vh] lg:justify-end lg:pb-2 pl-10">
            <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen bg-gradient-to-l">
                <img
                    src={`${baseUrl}${data?.data?.backdrop_path || data?.data?.poster_path}`}
                    className="object-cover h-full w-full" alt=''
                />
            </div>

            <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">
                {data?.data?.title || data?.data?.name || data?.data?.original_name}
            </h1>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">
                {data?.data?.overview}
            </p>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-xl lg:text-lg">
                {data?.data?.tagline}
            </p>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-xl lg:text-lg">
                Budget: {data?.data?.budget}$
            </p>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-xl lg:text-lg">
                Votes: {data?.data?.vote_count}
            </p>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-xl lg:text-lg">
                Language: {data?.data?.original_language?.toUpperCase()}
            </p>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-xl lg:text-lg">
                Total revenue: {data?.data?.revenue}$
            </p>
            <div className="flex space-x-3">
                <a href={data?.data?.homepage || '/'} className="bannerButton bg-white text-black">
                    <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                    Play
                </a>
            </div>
        </div>
    );
};

export default MovieDetails;