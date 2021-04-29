import React from 'react';
import './topsectioncontent.style.css';
import TextSearchBar from "../TextSearchar";
import PlateOfFood from "../../elements/PlateofFood";

const TopSectionContent = () => {
    return (
        <div className={'top-section-content'}>
            <div style={{width:'90%'}}>
                <TextSearchBar/>
            </div>
           <div style={{width:'70%'}}>
               <PlateOfFood/>
           </div>


        </div>
    );
};

export default TopSectionContent;