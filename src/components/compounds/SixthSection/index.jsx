import React from 'react';
import './sixsection.style.css'
import googlePlay from '../../../thumbnails/CTA Download app.png'
import Phone from "../../elements/Phone";

const SixthSection = () => {
    return (
        <div className={'sixth-section'}>
         <div className={'sixth-section_sixth-con container'}>
             <div className={'first'}>
                 <div className={'first_sixth-text-heading'}>
                     <h4 className={'sth'}>
                         <p>Download app for</p>
                         <p>Exciting Deals!</p>
                     </h4>
                 </div>
                 <div className={'stc'}>
                    <p className={'stc_text'}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </p>   <div className={'sixth-emage-div'}>
                     <img src={googlePlay} alt={'google play'}/>
                 </div>
                 </div>

             </div>
             <div className={'ps'}>
                 <Phone/>
             </div>


         </div>

        </div>
    );
};

export default SixthSection;