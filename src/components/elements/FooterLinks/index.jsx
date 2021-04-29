import React from 'react';
import {Link} from 'react-router-dom'
import './footerlink.style.css'

const FooterLinks = () => {
    return (
        <div className={'footer-link'}>
            <Link to={'/'} className={'link'}>Product</Link>
            <Link to={'/'} className={'link'}>Company</Link>
            <Link to={'/'} className={'link'}>Learn more</Link>
            <Link to={'/'} className={'link'}>Get in touch</Link>



        </div>
    );
};

export default FooterLinks;