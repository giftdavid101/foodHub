import React from 'react';
import DiscoverRestaurantTopSection from "../../components/compounds/DiscoverRestaurant-TopSection";
import './homepage.style.css';
import Navbar from "../../components/compounds/Navbar";

const HomePage = () => {
    return (
        <div className={'homepage container'}>
            <Navbar absolute/>
            <DiscoverRestaurantTopSection/>

        </div>
    );
};

export default HomePage;