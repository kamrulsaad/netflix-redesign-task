import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMoviesData } from '../store/movies/movies-actions';

const Banner = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMoviesData())
    }, [dispatch])

    return (
        <div>
            This is Banner
        </div>
    );
};

export default Banner;