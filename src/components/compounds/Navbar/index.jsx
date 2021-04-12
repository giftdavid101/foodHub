import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.style.css';


const Navbar = (absolute) => {
    return (
        <div className={`navbar hero-background ${absolute ? '' : ''}`}>

            <div className={'lnk-content'}>
                <Link className={'site-logo'} to={'/'}>FoodHub</Link>

                <div className={'navbar_nav-links'}>
                    <Link className={''} to={'/'}>Home</Link>
                    <Link className={''} to={'/about'}>About Us</Link>
                    <Link className={''} to={'/contact'}>Contact Us</Link>
                    <Link className={''} to={'/menu'}>Menu</Link>
                    <Link className={''} to={'/login'}>Login</Link>
                </div>
            </div>
            <div>
                <div className={'navbar_user'}>
                    <div className={'navbar_user-emage'}>
                        <img src={'/assets/imgs/Userpic.png'} alt={'user'}/>
                    </div>
                    <Link to={'/user'}>User</Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;