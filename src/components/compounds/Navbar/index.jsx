import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.style.css';



const Navbar= (absolute) => {
    return (
        <div className={`navbar ${absolute?'navbar--is-absolute':''} content-container`}>
            <div className={'navbar_navbar-con '}>
                <Link className={'navbar_logo '} to={'/'}>FoodHub</Link>
                <div className={'navbar_nav-links'}>
                    <Link className={'lnk-margin'} to={'/'}>Home</Link>
                    <Link  className={'lnk-margin'} to={'/about'}>About Us</Link>
                    <Link className={'lnk-margin'} to={'/contact'}>Contact Us</Link>
                    <Link className={'lnk-margin'} to={'/menu'}>Menu</Link>
                    <Link className={'lnk-margin'} to={'/login'}>Login</Link>
                </div>

                <div className={'navbar_user'}>
                    <div className={'navbar_user_user-emage'}>
                        <img src={'/assets/imgs/Userpic.png'} alt={'user'} />
                    </div>
                    <Link to={'/user'}>User</Link>
            </div>

            </div>




        </div>
    );
};

export default Navbar;