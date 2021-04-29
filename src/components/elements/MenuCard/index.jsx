import React from 'react';
import './menucard.style.css';

const MenuCard = ({food}) => {
    return (
        <div className={'menu-card'}>
            <div className={'menu-card-emage-div'}>
                <img src={food.emage} alt={'food'}/>
            </div>
            <div className={'menu-card-content'}>
                <div className={'menu-card-title'}>  <span className={''}>{food.name}</span> <span> &#36; {food.price}</span></div>

                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
            </div>

        </div>
    );
};

export default MenuCard;