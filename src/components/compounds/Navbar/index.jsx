import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.style.css';
import {accountNameToggle} from "../../../helpers/accountNameToggle";


const Navbar = (absolute) => {
    return (
        <div className={`navbar ${absolute ? '' : ''}`}>
            <Link className={'site-logo'} to={'/'}>FoodHub</Link>

            <div className={'navbar_nav-links'}>
                <Link className={''} to={'/'}>Home</Link>
                <Link className={''} to={'/about'}>About Us</Link>
                <Link className={''} to={'/contact'}>Contact Us</Link>
                <Link className={''} to={'/menu'}>Menu</Link>
                <Link className={''} to={'/login'}>Login</Link>
            </div>
            <div className={'navbar_user'}>
                <Link className={'navbar_user-emage'} to={'/user'}>
                    <img src={'/assets/imgs/Userpic.png'} alt={'user'}/>
                </Link>
                <Link to={'/user'}>{accountNameToggle('Gift Fagami David')}</Link>
            </div>
        </div>
    );
};

export default Navbar;