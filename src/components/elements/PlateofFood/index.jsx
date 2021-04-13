import React from 'react';
import './plateoffood.style.css'

// Todo add arrows

const PlateOfFood = () => {
    return (
        <>
            <div className={'plate'}>
                <img className={'plate-dot-image'} src={'/assets/imgs/dot.png'} alt={'dot'}/>
                <img className={'plate-dot-image'} src={'/assets/imgs/dot.png'} alt={'dot'}/>
                <div className={"plate-focus-image"}>
                    <img className={'lettuce'} src={'/assets/imgs/lettuce.png'} alt={'dot'}/>
                    <img className={'food'} src={'/assets/imgs/food.png'} alt={'food'}/>
                </div>
            </div>
            <div className="plate-navigate-image">
                arrow here
            </div>
        </>
    );
};

export default PlateOfFood;