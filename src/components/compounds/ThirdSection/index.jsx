import React from 'react';
import './thirdsection.style.css';
import dotted from '../../../thumbnails/dotted.png'



const ThirdSection = () => {
    return (
        <div className={`third-section `}>
            <div className={'third-section_ts-con'}>
                <div className={'dotted-img1 dot-img'}>
                    <img src={dotted} alt={'dotted'}/>
                </div>
                <div className={'dotted-img2 dot-img'}>
                    <img src={dotted} alt={'dotted'}/>
                </div>

                 <div className={'white-div'}>
                     <div style={{width:'80%',
                         display:'flex',flexDirection:'column', justifyContent:'center'}} >


                    <div style={{padding:'30px'}}>
                        <div className={'red-hr-line'}>
                            {''}
                        </div>
                        <p>advance booking</p>
                    </div>
                     <div className={'search-bar'}>
                         <input placeholder={'search restaurant food'}/>
                         <button className={'square-btn'}> Go</button>
                     </div>

                     </div>
                 </div>
            </div>
        </div>
    );
};

export default ThirdSection;