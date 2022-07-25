import React, {useState} from 'react';
import galleryFirst from '../../images/desktop-image-hero-1.jpg'
import gallerySecond from '../../images/desktop-image-hero-2.jpg'
import galleryThird from '../../images/desktop-image-hero-3.jpg'
import galleryArrow from '../../images/icon-arrow.svg'
import './Gallery.css';

const Gallery = () => {

    const [select,setSelect] = useState(0);
    const moveLeft = () => {
        if(select === 0) {
            setSelect(2)
        } else {
            setSelect(select - 1)
        }
    }
    const moveRight = () => {
        if(select === 2) {
            setSelect(0)
        } else {
            setSelect(select + 1)
        }
    }


    return(
        <div className='gallery-container'>
                <div className='gallery-images'>
                    <img src={galleryFirst}></img>
                </div>
                <div className='gallery-text'>
                    <p></p>
                    <p></p>
                    <a><span>SHOP NOW</span></a>
                    <div className='gallery-buttons'>
                        <button onClick={moveLeft}><span id='left-arrow'>&#60;</span></button>
                        <span>{select}</span>
                        <button onClick={moveRight}><span id='right-arrow'>&#62;</span></button>
                    </div>
                </div>
        </div>
    )

};

export default Gallery;