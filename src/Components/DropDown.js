import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HiChevronDown } from 'react-icons/hi'
import { moviesActions } from '../store/movies/movie-slice';

export default function DropDown() {

    const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]

    const dispatch = useDispatch();

    const movies = useSelector(state => state.movies.movies)

    const filterByYear = (year) => {
        const moviesByYear = movies.filter(movie => parseInt(movie.release_date.slice(0,4)) === year )
        dispatch(moviesActions.replaceData({
            movies: moviesByYear
        }))
    }

    return (
        <div className="w-full text-right mb-4">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Filter by Release Year
                        <HiChevronDown
                            className="ml-2 -mr-1 h-5 w-5 text-red-200 hover:text-red-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right rounded-md bg-[#141414] shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
                        {
                            years.map(y => <div onClick={() => filterByYear(y)} key={y} className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`${active ? 'bg-red-600 text-white' : 'text-gray-100'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            {y}
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>)
                        }
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

