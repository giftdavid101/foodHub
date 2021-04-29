import React from 'react';
import './locationicon.style.css'

import LocationCity from "../LocationCity";

// Todo make reusable
const Location = () => {
    return (
        <div className={'location-tag'}>
          <LocationCity>
              Hybrad
          </LocationCity>
        </div>
    );
};

export default Location;