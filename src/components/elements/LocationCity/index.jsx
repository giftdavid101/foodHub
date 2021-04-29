import React from 'react';
import {MdLocationOn} from "react-icons/all";
import './locationcity.style.css';

const LocationCity = ({children}) => {
    return (
        <div className={'location-city'}>
            <MdLocationOn size={35}/>
            <span className={'hybrad'}>{children}</span>
        </div>
    );
};

export default LocationCity;