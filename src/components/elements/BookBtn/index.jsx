import React from 'react';
import arr from '../../../Arrow.svg'
import './bookbtn.style.css'

const BookNowBtn = () => {
    return (
        <div className={'book-now btn-squared-btn'} >
            <button className={'bbtn'}>
                Book Now
                <div style={{marginLeft:'5px'}}>
                    <img src={arr} alt={'arrow'} />
                </div>
            </button>


        </div>
    );
};

export default BookNowBtn;