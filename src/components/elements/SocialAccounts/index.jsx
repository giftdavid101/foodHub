import React from 'react';
import {FaTwitterSquare,FaFacebookSquare,FaLinkedin,AiFillInstagram} from 'react-icons/all'
import './social-accounts.style.css'

const SocialAccounts = () => {
    return (
        <div className={'social-accounts'}>
                <a className={'a-link'} href={'#'}><FaTwitterSquare/></a>
                <a className={'a-link'} href={'#'}><FaFacebookSquare/></a>
                <a className={'a-link'} href={'#'}><FaLinkedin/></a>
                <a className={'a-link'} href={'#'}><AiFillInstagram/></a>
        </div>
    );
};

export default SocialAccounts;