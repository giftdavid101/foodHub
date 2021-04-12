import React from 'react';
import DiscoverRestaurantTopSection from "../../components/compounds/DiscoverRestaurant-TopSection";
import './homepage.style.css';
import SecondSection from "../../components/compounds/SecondSection";
import HeroSection from "../../components/heroSection";
import FourthSection from "../../components/FourthSection";




const HomePage = () => {
    return (
        <div className={'homepage'}>
            <HeroSection/>

            <div className={'container'}>
                <DiscoverRestaurantTopSection/>
            </div>

            <div className={'container'}>
                <SecondSection/>
            </div>


        </div>
    );
};

export default HomePage;