import React from 'react';
import './homepage.style.css';
import SecondSection from "../../components/compounds/SecondSection";
import HeroSection from "../../components/heroSection";
import ThirdSection from "../../components/compounds/ThirdSection";
import FourthSection from "../../components/compounds/FourthSection";

const HomePage = () => {
    return (
        <div className={'homepage'}>
            <HeroSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>

        </div>
    );
};

export default HomePage;