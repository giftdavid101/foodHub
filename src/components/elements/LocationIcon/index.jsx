import React from 'react';
import './locationicon.style.css'
import {MdLocationOn} from 'react-icons/all'

const Location = () => {
    return (
        <div className={'location'}>
             <div className={'location_location-name'}>
                 <MdLocationOn size={35}/>
                 <span className={'hybrad'}>Hydrabad</span>
             </div>
        </div>
    );
};

export default Location;