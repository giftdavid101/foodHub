import React from 'react';
import './thirdsection.style.css';
import dotted from '../../../thumbnails/dotted.png'
import cabbage from '../../../thumbnails/—Pngtree—lettuce_1175257.png'
import lettuce from '../../../thumbnails/lettuce.png'
import SearchBar from "../../elements/SearchBar";
import SearchBarSquare from "../../elements/SearchBarSquare";
import Select from "../../elements/Select";



const ThirdSection = () => {
    return (
        <div className={'third-section'}>
            <div className={'cabbage'}>
               <img src={cabbage} alt={'cabbage'} />
            </div>
            <div className={'cabbage2'}>
               <img src={lettuce} alt={'cabbage'} />
            </div>
            <div className={'third-section_ts-con'}>
                <div className={'dotted-img1 dot-img'}>
                    <img src={dotted} alt={'dotted'}/>
                </div>
                <div className={'dotted-img2 dot-img'}>
                    <img src={dotted} alt={'dotted'}/>
                </div>

                 <div className={'white-div'}>
                     <div>
                         <div style={{padding:'30px'}}>
                            <div className={'red-hr-line'}>
                               {''}
                            </div>
                        <p>advance booking</p>
                    </div>
                      <SearchBarSquare/>
                     <Select/>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default ThirdSection;