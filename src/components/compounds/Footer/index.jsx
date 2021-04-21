import React from 'react';
import './footer.style.css';
import RadialInput from "../../elements/RadialInput";
import FooterLinks from "../../elements/FooterLinks";
import SocialAccounts from "../../elements/SocialAccounts";
import plant from '../../../thumbnails/plant.png'


const Footer = () => {
    return (
        <div className={'footer'}
             style={{backgroundImage:`url('${plant}')`}}
        >
            <div className={'footer_footer-con'}>
                <div className={'footer-heading'}>
                    <div className={'footer-title-heading'}>
                        <p className={'text-mini-heading'}>Get notified</p>
                        <p className={'text-mini-heading'}>about new amazing products</p>
                    </div>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>It has been the industry's standard dummy text ever since. </p>
                    <RadialInput placeholder={'E-mail'}/>
                    <FooterLinks/>
                </div>
                <div className={'social-acc-div'}>
                    <SocialAccounts/>
                    <p>&copy; 2021 GiftDavid</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;