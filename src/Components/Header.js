import React, { useEffect, useState } from 'react';
import { HiSearch, HiBell } from "react-icons/hi";
import {NavLink} from 'react-router-dom'

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header data-aos="fade-in" data-aos-delay="500" className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain" alt=''
                />

                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink cursor-default font-semibold text-white hover:text-white">
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink"><NavLink to='/movies'>Movies</NavLink></li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <HiSearch className="sm hidden h-6 w-6 sm:inline" />
                <p className="hidden lg:inline">Kids</p>
                <HiBell className="h-6 w-6" />
                <img
                    src="https://rb.gy/g1pwyx"
                    alt=""
                    className="cursor-pointer rounded"
                />
            </div>
        </header>
    );
};

export default Header;