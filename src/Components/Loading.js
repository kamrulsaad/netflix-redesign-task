import React from 'react';

const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center animate-pulse">
            <img
                src="https://rb.gy/ulxxee"
                className="cursor-pointer object-contain w-24 md:w-[500px]" alt=''
            />
        </div>
    );
};

export default Loading;