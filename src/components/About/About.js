import React from 'react';
import aboutDark from '../../images/image-about-dark.jpg'
import aboutLight from '../../images/image-about-light.jpg'
import './About.css';

const About = () => {



    return(
        <div className='about-container'>
            <div className='about-sub'>
                <div className='about-first'>
                    <img src={aboutDark} alt='about-dark'></img>
                </div>
                <div className='about-second'>

                </div>
                <div className='about-third'>
                    <img src={aboutLight} alt='about-light'></img>
                </div>
            </div>
        </div>
    )

};

export default About;