import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.style.css';



const Navbar= () => {
    return (
        <div className={'navbar container'}>
            <div>
                <Link to={'/'}>FoodHub</Link>
            </div>
        <div className={'navbar_nav-links'}>
           <Link className={'lnk-margin'} to={'/'}>Home</Link>
           <Link  className={'lnk-margin'} to={'/about'}>About Us</Link>
           <Link className={'lnk-margin'} to={'/contact'}>Contact Us</Link>
           <Link className={'lnk-margin'} to={'/menu'}>Menu</Link>
           <Link className={'lnk-margin'} to={'/login'}>Login</Link>
        </div>



        </div>
    );
};

export default Navbar;