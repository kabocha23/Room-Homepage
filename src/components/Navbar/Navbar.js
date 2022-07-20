import React from 'react';
import './Navbar.css';

const Navbar = () => {



    return(
        <div className='navbar-container'>
            <div className='navbar-sub'>
                <div className='navbar-brand'>
                    <p>room</p>
                </div>
                <div className='nav-menu'>
                    <div className='nav-menu-items'>
                        <a>home</a>
                        <a>shop</a>
                        <a>about</a>
                        <a>contact</a>
                    </div>                
                </div>
            </div>
        </div>
    )

};

export default Navbar;