import React from 'react';
import './secondsection.style.css';
import SecondSectionText from "../../elements/SectionSectionText";
import SecondSectionCardContent from "../SectionSectionCardContent";

const SecondSection = (absolute) => {
    return (
        <div className={`second-section ${absolute?'navbar--is-absolute':''} container`}>
           <SecondSectionText/>
           <SecondSectionCardContent/>
        </div>
    );
};

export default SecondSection;