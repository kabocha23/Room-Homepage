import React from 'react';
import './Navbar.css';

const Navbar = ({toggleIsNav, isNavExpanded}) => {



    return(
        <div className='navbar-container'>
            <div className='navbar-sub'>
                <div className='toggle-button'>
                    <button 
                        onClick={toggleIsNav} 
                        className={isNavExpanded 
                            ? 'toggle-button-btn expanded' 
                            : 'toggle-button-btn'
                        }
                    >
                        {isNavExpanded == true ?
                            'X' :
                            '☰'
                        }
                    </button>
                </div>
                <div 
                    className={isNavExpanded 
                        ? 'nav-menu-coll expanded' 
                        : 'nav-menu-coll'
                    }
                >
                    <div className='nav-menu-items-coll'>
                        <a>home</a>
                        <a>shop</a>
                        <a>about</a>
                        <a>contact</a>
                    </div>                
                </div>
                <div className={isNavExpanded 
                        ? 'overlay' 
                        : 'no-overlay'
                }></div>
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