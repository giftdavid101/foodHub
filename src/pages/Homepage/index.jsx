import React from 'react';
import './homepage.style.css';
import SecondSection from "../../components/compounds/SecondSection";
import HeroSection from "../../components/heroSection";
import ThirdSection from "../../components/compounds/ThirdSection";
import FourthSection from "../../components/compounds/FourthSection";
import FifthSection from '../../components/compounds/FifthSection';

const HomePage = () => {
    return (
        <div className={'homepage'}>
            <HeroSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>

        </div>
    );
};

export default HomePage;