import React from 'react';
import { useDispatch } from 'react-redux';
import { getMoviesData } from '../store/movies/movies-actions';

const Pagination = () => {

    const rows = []

    for (let i = 0; i < 10; i++) {
        rows.push(i + 1)
    }

    const dispatch = useDispatch()

    const gotoPage = (page) => {
        dispatch(getMoviesData(page))
    }

    return (
        <div className="flex justify-center mt-12">
            <nav aria-label="Page navigation example">
                <ul className="flex flex-wrap list-style-none">
                    {rows.map(function (i) {
                        return (<li key={i} onClick={() => gotoPage(i)} className="page-item">
                            <p
                                className="cursor-pointer relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-100  hover:bg-red-500 focus:shadow-none"

                            >
                                {i}
                            </p>
                        </li>)
                    })}
                </ul>
            </nav>
        </div>

    );
};

export default Pagination;