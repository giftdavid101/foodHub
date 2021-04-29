import React from 'react';
import './homepage.style.css';
import SecondSection from "../../components/compounds/SecondSection";
import HeroSection from "../../components/heroSection";
import ThirdSection from "../../components/compounds/ThirdSection";
import FourthSection from "../../components/compounds/FourthSection";
import FifthSection from '../../components/compounds/FifthSection';
import SixthSection from "../../components/compounds/SixthSection";
import Footer from "../../components/compounds/Footer";

const HomePage = () => {
    return (
        <div className={'homepage'}>
            <HeroSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
            <Footer/>
        </div>
    );
};

export default HomePage;