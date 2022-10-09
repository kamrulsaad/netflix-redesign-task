import React from 'react';
import { useSelector } from 'react-redux'
import DropDown from './DropDown';
import Thumbnail from './Thumbnail';

const AllMovies = () => {

    const movies = useSelector(state => state.movies.movies)

    return (
        <div className='mt-20 mx-10'>
            <DropDown></DropDown>
            <div className='grid grid-cols-3 lg:grid-cols-5 gap-4'>
                {
                    movies.map(m => <Thumbnail key={m.id} movie={m}></Thumbnail>)
                }
            </div>
        </div>

    );
};

export default AllMovies;