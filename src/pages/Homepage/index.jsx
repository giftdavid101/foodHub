import React from 'react';
import './homepage.style.css';
import SecondSection from "../../components/compounds/SecondSection";
import HeroSection from "../../components/heroSection";

const HomePage = () => {
    return (
        <div className={'homepage'}>
            <HeroSection/>
            <SecondSection/>

        </div>
    );
};

export default HomePage;