import React from 'react';
import {Link} from 'react-router-dom'
import './footerlink.style.css'

const FooterLinks = () => {
    return (
        <div className={'footer-link'}>
            <Link className={'link'}>Product</Link>
            <Link className={'link'}>Company</Link>
            <Link className={'link'}>Learn more</Link>
            <Link className={'link'}>Get in touch</Link>



        </div>
    );
};

export default FooterLinks;