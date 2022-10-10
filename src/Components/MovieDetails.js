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
        <div className="flex flex-col space-y-1 py-16 md:space-y-4 lg:h-[90vh] lg:justify-end lg:pb-2 pl-4 md:pl-10">
            <div data-aos="fade-in" data-aos-delay="1000" className="absolute top-0 left-0 -z-10 h-[95vh] w-screen bg-gradient-to-l">
                <img
                    src={`${baseUrl}${data?.data?.backdrop_path || data?.data?.poster_path}`}
                    className="object-cover h-full w-full" alt=''
                />
            </div>

            <h1 data-aos="fade-in" data-aos-delay="1100" className="text-2xl font-bold md:text-3xl lg:text-5xl">
                {data?.data?.title || data?.data?.name || data?.data?.original_name}
            </h1>
            <p data-aos="fade-in" data-aos-delay="1200" className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">
                {data?.data?.overview}
            </p>
            <p data-aos="fade-in" data-aos-delay="1300" className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-xl lg:text-lg">
                {data?.data?.tagline}
            </p>
            <p data-aos="fade-in" data-aos-delay="1400" className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-xl lg:text-lg">
                Budget: {data?.data?.budget}$
            </p>
            <p data-aos="fade-in" data-aos-delay="1500" className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-xl lg:text-lg">
                Votes: {data?.data?.vote_count}
            </p>
            <p data-aos="fade-in" data-aos-delay="1600" className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-xl lg:text-lg">
                Language: {data?.data?.original_language?.toUpperCase()}
            </p>
            <p data-aos="fade-in" data-aos-delay="1700" className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-xl lg:text-lg">
                Total revenue: {data?.data?.revenue}$
            </p>
            <div data-aos="fade-in" data-aos-delay="2000" className="flex space-x-3">
                <a href={data?.data?.homepage || '/'} className="bannerButton bg-white text-black">
                    <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                    Play
                </a>
            </div>
        </div>
    );
};

export default MovieDetails;