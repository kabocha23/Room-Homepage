import React from 'react';
import galleryFirst from '../../images/desktop-image-hero-1.jpg'
import gallerySecond from '../../images/desktop-image-hero-2.jpg'
import galleryThird from '../../images/desktop-image-hero-3.jpg'
import './Gallery.css';

const Gallery = () => {



    return(
        <div className='gallery-container'>
            <div className='gallery-sub'>
                <div className='gallery-images'>
                    <img src={galleryFirst}></img>
                </div>
                <div className='gallery-text'>
                    <p></p>
                    <p></p>
                    <a><span>SHOP NOW</span></a>
                    <div></div>
                </div>
            </div>
        </div>
    )

};

export default Gallery;