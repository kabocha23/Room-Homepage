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
    const [content, setContent] = useState([
        ["Manufactured with the best materials","We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."],
        ["We are available all across the globe","With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."],
        ["Discover innovative ways to decorate","Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]
    ])


    return(
        <div className='gallery-container'>
                <div className='gallery-images'>
                    {select === 0 
                        ? <img src={galleryFirst} alt='gallery-first'></img>
                        : select === 1 
                            ? <img src={gallerySecond} alt='gallery-second'></img>
                            : <img src={galleryThird} alt='gallery-third'></img>
                    }
                    
                </div>
                <div className='gallery-text'>
                    <h1>{content[select][0]}</h1>
                    <p>{content[select][1]}</p>
                    <a><span>SHOP NOW <img src={galleryArrow} alt='gallery-arrow'></img></span></a>
                    <div className='gallery-buttons'>
                        <button onClick={moveLeft}><span id='left-arrow'>&#60;</span></button>
                        <button onClick={moveRight}><span id='right-arrow'>&#62;</span></button>
                    </div>
                </div>
        </div>
    )

};

export default Gallery;