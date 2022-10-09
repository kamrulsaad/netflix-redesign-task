import React from 'react';
import Row from './Row';

const Movies = () => {

    const data = [
        "Trending Now", "Top rated", "action thrillers", "comedies", 'horror', 'romance', 'documentaries'
    ]

    return (
        <section className="md:space-y-24">
            {
                data.map((d, index) => <Row key={index} title={d} page={index+1}></Row>)
            }
        </section>
    );
};

export default Movies;