import React from 'react';
import './phone.style.css'
import phone from '../../../thumbnails/phone.png'
import lettuce from '../../../thumbnails/lettuce.png'
import dotted from '../../../thumbnails/dotted.png'

const Phone = () => {
    return (
        <div className={'phone'}>
            <div className={'phone_phone-con'}>
                <div className={'phone-emage-div'}>
                    <img src={phone} alt={'phone'}/>
                </div>
                <div className={'lettuce-and-dot'}>
                        <div className={'dotted-emage-div'}>
                            <img src={dotted} alt={'dotted'}/>
                        </div>
                    <div className={'lettuce-emage-div'}>
                       <img src={lettuce} alt={'lettuce'}/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Phone;