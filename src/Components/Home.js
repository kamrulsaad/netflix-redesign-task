import React from 'react';
import Banner from './Banner';
import Movies from './Movies';

const Home = () => {
    return (
        <div className='relative pl-4 pb-24 lg:space-y-40 lg:pl-16'>
            <Banner></Banner>
            <Movies></Movies>
        </div>
    );
};

export default Home;