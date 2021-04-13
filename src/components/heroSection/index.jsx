import React from 'react';
import Navbar from "../compounds/Navbar";
import Location from "../elements/LocationIcon";
import './hero.style.css'
// import DiscoverRestaurantTopSection from "../compounds/DiscoverRestaurant-TopSection";


const HeroSection = () => {
    return (
        <section className='hero-section'>
            <div className="back-drop">
                <div/>
                <div/>
            </div>
            <div className="container">
                <Navbar />
                <div className='hero-section__content'>
                    {/*<DiscoverRestaurantTopSection/>*/}
                </div>
            </div>
            <Location/>
        </section>
    );
};

export default HeroSection;