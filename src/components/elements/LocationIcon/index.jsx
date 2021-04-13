import React from 'react';
import './locationicon.style.css'
import {MdLocationOn} from 'react-icons/all'

// Todo make reusable
const Location = () => {
    return (
        <div className={'location-tag'}>
            <MdLocationOn size={35}/>
            <span className={'hybrad'}>Hydrabad</span>
        </div>
    );
};

export default Location;