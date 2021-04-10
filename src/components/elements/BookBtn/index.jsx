import React from 'react';
import arr from '../../../Arrow.svg'
import './bookbtn.style.css'

const BookNowBtn = () => {
    return (
        <div style={{
            width: '60%',
            background:'white',
            display:'flex',
            alignItems:'center',
            padding: '5px',
            marginBottom:'10px',
            borderBottomRightRadius: '10px',
            color:'#FE043C'}}>
            <div className={'bbtn'}>
                Book Now
                <div style={{width:'20px', marginLeft:'5px'}}>
                    <img src={arr} alt={'arrow'} />
                </div>
            </div>


        </div>
    );
};

export default BookNowBtn;