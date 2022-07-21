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
                    <p>ABOUT OUR FURNITURE</p>
                    <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pickk a cohesive theme that best expresses your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                </div>
                <div className='about-third'>
                    <img src={aboutLight} alt='about-light'></img>
                </div>
            </div>
        </div>
    )

};

export default About;