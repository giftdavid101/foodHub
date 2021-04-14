import React from 'react';
import './secondsection.style.css';
import SecondSectionCardContent from "../SectionSectionCardContent";
import TitleText from "../TitleText";

const SecondSection = () => {
    return (
        <section className={`second-section`}>
            <div className={'container'}>
                <TitleText>
                    <div className={'text-mini-heading-div'}>
                        <p className={'text-mini-heading'}>Some top restaurant for dining top or in</p>
                    </div>
                    <div className={'text-content'}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            nderit
                        </p>
                    </div>
                </TitleText>
            </div>


           <SecondSectionCardContent/>
        </section>
    );
};

export default SecondSection;