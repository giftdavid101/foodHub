import React from 'react';
import './plateoffood.style.css'

const PlateOfFood = () => {
    return (
        <div className={'plate-of-food'}>
            <div className={'plate-of-food_emage-holder'}>
                <div className={'plate-of-food_emage-holder_dot-emage-container'}>
                    <img className={'dotemage'} src={'/assets/imgs/dot.png'} alt={'dot'}/>
                </div>
                <div className={'plate-of-food_emage-holder_dot-emage-container'}>
                    <img className={'dotemage'} src={'/assets/imgs/dot.png'} alt={'dot'}/>
                </div>
                <div className={'plate-of-food_emage-holder_food-emage'}>
                    <img className={'food'} src={'/assets/imgs/food.png'} alt={'food'}/>
                </div>
                <div className={'plate-of-food_emage-holder_lettuce-emage'}>
                    <img className={'lettuce'} src={'/assets/imgs/lettuce.png'} alt={'dot'}/>
                </div>
            </div>

        </div>
    );
};

export default PlateOfFood;