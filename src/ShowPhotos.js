import React, { Component, useState } from 'react';
import './App.css';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    800: 1
};

function ShowPhotos(props){

    const [colActive, toggleCol] = useState("true");

    const pictas = props.photos.map( (apic,idx) => {
        return (
            <div className='picsdiv' key={idx}>
                <img className='pics' src={apic.photos[0].original_size.url} alt='from tumblr' />
            </div>
        );
    }
    );

    // function photosHelper(){
    //     console.log(pictas);
    // };

    return(
        <>
            {/* <section>{photosHelper()}</section> */}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {pictas}
            </Masonry>
        </>
    );
}

export default ShowPhotos;