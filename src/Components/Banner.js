import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesData } from '../store/movies/movies-actions';
import { FaPlay } from 'react-icons/fa'
import { HiInformationCircle } from "react-icons/hi";
import Loading from './Loading';

const Banner = () => {

    const dispatch = useDispatch()

    const movie = useSelector(state => state.movies.random)
    const baseUrl = useSelector(state => state.movies.img_url)
    const loading = useSelector(state => state.movies.loading)

    useEffect(() => {
        dispatch(getMoviesData())
    }, [dispatch])

    if(loading) return <Loading></Loading>

    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
            <div data-aos="fade-in" data-aos-delay="1000" className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
                <img 
                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    className="object-cover h-full w-full" alt=''
                />
            </div>

            <h1 data-aos="fade-in" data-aos-delay="1100" className="text-2xl font-bold md:text-3xl lg:text-5xl">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p data-aos="fade-in" data-aos-delay="1200" className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">
                {movie?.overview?.slice(0,300)}
            </p>
            <div data-aos="fade-in" data-aos-delay="1400" className="flex space-x-3">
                <button  className="bannerButton bg-white text-black">
                    <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                    Play
                </button>

                <button className="bannerButton bg-[gray]/70">
                    <HiInformationCircle className="h-5 w-5 md:h-8 md:w-8" /> More Info
                </button>
            </div>
        </div>
    );
};

export default Banner;