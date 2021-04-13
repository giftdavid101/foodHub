import React from 'react';
import './secondsection.style.css';
import SecondSectionCardContent from "../SectionSectionCardContent";
import TitleText from "../TitleText";

const SecondSection = () => {
    return (
        <div className={`second-section`}>
            <TitleText>
                <div className={'text-mini-heading-div'}>
                   <p className={'text-mini-heading'}>Some top restaurant for</p><p> dining top or in</p>
                </div>
                <div className={'text-content'}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    </p>
                </div>




            </TitleText>

           <SecondSectionCardContent/>
        </div>
    );
};

export default SecondSection;