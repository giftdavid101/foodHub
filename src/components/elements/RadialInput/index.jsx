import React from 'react';
import './radialinput.style.css';
import arrow from '../../../thumbnails/miniRightArrow.png'

const RadialInput = ({onSubmit,placeholder,onChange,onClick}) => {
    return (
        <div className={'radial-input'}>
            <form className={'radial-input_radial-input-form'} onSubmit={onSubmit}>
                <input placeholder={placeholder} onChange={onChange}/>
                <button className={'btn-rounded-btn'} onClick={onClick}> <img src={arrow} alt={'go'}/></button>
            </form>
        </div>
    );
};

export default RadialInput;