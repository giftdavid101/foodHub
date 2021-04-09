import React from 'react';
import DiscoverRestaurantTopSection from "../../components/compounds/DiscoverRestaurant-TopSection";
import './homepage.style.css';
import Navbar from "../../components/compounds/Navbar";
import Location from "../../components/elements/LocationIcon";



const HomePage = () => {
    return (
        <div className={'homepage container '}>
            <Navbar absolute/>
             <Location/>


            <div className={'content-container'}>
                <DiscoverRestaurantTopSection/>
            </div>



        </div>
    );
};

export default HomePage;