import React from 'react';
import './arrows.style.css'
import greater from '../../../Greater.svg'
import less from '../../../Less.svg'


const Arrows = () => {
    return (
        <div className={'arrows'}>
            <div className={'arrows_arrow-content'}>
                <div className={'arrows_less arrow'}>
                  <img src={less} alt={'lessthan'}/>
                </div>
                <div className={'arrows_greater arrow'}>
                    <img src={greater} alt={'greaterthan'}/>
                </div>

            </div>


        </div>
    );
};

export default Arrows;