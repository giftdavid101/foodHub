import React from 'react';
import './homepage.style.css';
import SecondSection from "../../components/compounds/SecondSection";
import HeroSection from "../../components/heroSection";
import ThirdSection from "../../components/compounds/ThirdSection";

const HomePage = () => {
    return (
        <div className={'homepage'}>
            <HeroSection/>
            <SecondSection/>
            <ThirdSection/>

        </div>
    );
};

export default HomePage;