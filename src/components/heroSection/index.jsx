import React from 'react';
import Navbar from "../compounds/Navbar";
import Location from "../elements/LocationIcon";
import './hero.style.css'


const HeroSection = () => {
    return (
        <section>
            <div className="container">
                <Navbar />
            </div>
            <div className={'container hero-background'}>
                <div>
                   1
                </div>
                <div>2</div>
            </div>
            <Location/>
        </section>
    );
};

export default HeroSection;