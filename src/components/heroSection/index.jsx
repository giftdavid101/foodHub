import React from 'react';
import Navbar from "../compounds/Navbar";
import Location from "../elements/LocationIcon";
import './hero.style.css'
import SearchBar from "../elements/SearchBar";
import PlateOfFood from "../elements/PlateofFood";


const HeroSection = () => {
    return (
        <section className='hero-section'>
            <div className="back-drop">
                <div id={'hero-section--transparent-bkg'}/>
                <div id={'hero-section--red-bkg'}/>
            </div>
            <div className="container">
                <Navbar/>
                <div className='hero-section__content'>
                    <div className="hero-section__content-form">
                        <p className={'text text-heading text-heading--hidden'}>Food</p>
                        <p className={'text text-subheading'}>discover restaurants <br/> & delicious food</p>
                        <SearchBar placeholder={'search restaurant, food'}
                        onChange={()=>{}}
                        onSubmit={(e)=>{e.preventDefault()}}
                        />
                    </div>
                    <div className="hero-section__content-image">
                        <PlateOfFood/>
                    </div>
                </div>
            </div>
            <Location/>
        </section>
    );
};

export default HeroSection;