import React from 'react';
import './discovertopsection.style.css'
import TopSectionText from "../../elements/TopSectionText";
import SearchBar from "../../elements/SearchBar";

const DiscoverRestaurantTopSection = () => {
    return (
        <div className={'top-section container'}>
            <div className={'top-section_left-partition'}>
                <div className={'top-section_left-partition_text-con'}>
                    <div className={'testing'}>
                        <div style={{width: '100%'}}>
                            <TopSectionText/>
                            <SearchBar/>
                        </div>
                        {/*<div className={'top-section_left-partition_emages'}>*/}
                            <div className={'top-section_left-partition_emages_emage-con'}>
                                <img className={'dot-emage'} src={'/assets/imgs/dot.png'} alt={'dot'}/>
                                <img className={'dot-emage'} src={'/assets/imgs/dot.png'} alt={'dot'}/>

                                <div className={'food-emage'}>
                                    <img className={'food'} src={'/assets/imgs/food.png'} alt={'food'}/>

                                </div>
                            </div>
                        <div className={'lettuce-emage'}>
                            <img className={'lettuce'} src={'/assets/imgs/lettuce.png'} alt={'dot'}/>
                        </div>
                            {/*<div className={'food-emage'}>*/}
                            {/*    <img className={'food'} src={'/assets/imgs/food.png'} alt={'food'}/>*/}
                            {/*</div>*/}

                        {/*</div>*/}


                    </div>

                </div>


            </div>


            <div className={'top-section_right-partition'}>

            </div>


        </div>
    );
};

export default DiscoverRestaurantTopSection;