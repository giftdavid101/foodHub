import React from 'react';
import './discovertopsection.style.css'
import TopSectionContent from "../TopSectionContent";
import Arrows from "../../elements/Arrows";

const DiscoverRestaurantTopSection = () => {
    return (
        <div className={'top-section container'}>
            <div className={'top-section_left-partition'}>
                <div className={'test'}>
                    <TopSectionContent/>
                </div>
            </div>


            <div className={'top-section_right-partition'}>
              <Arrows/>
            </div>


        </div>
    );
};

export default DiscoverRestaurantTopSection;