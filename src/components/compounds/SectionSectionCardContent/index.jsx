import React from 'react';
import './secondsectioncardcontent.style.css'
import Card from "../../elements/Card";
import imgone from '../../../thumbnails/food-photographer.png'
import imgtwo from '../../../thumbnails/food-photographer2.png'
import greaterthan from '../../../Greater.svg'
import dotted from '../../../thumbnails/dotted.png'
import BookNowBtn from "../../elements/BookBtn";
import LocationCity from "../../elements/LocationCity";

const SecondSectionCardContent = () => {
    return (
        <div className={'second-section-card-content'}>
            <div className={'second-section-card-content_ssct-con'}>
                <div className={'second-section-card-content_ssct-con_card-holda'}>
                    <div className={'dot-card'}>
                        <div className={'dot-card_dottedemage-div'}>
                            <img src={dotted} alt={'dotted'}/>
                        </div>
                        <Card>
                            <div
                                className={'card-emage-div'}
                                style={{
                                    background: `url(${imgone})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                <div className={'card-emage-div_ced'}>
                                    <div className={'card-emage-div_ced_ced-content'}>
                                        <h2>Fire Water</h2>
                                        <p className={'card-emage-div_ced_ced-content_ced-text'} style={{}}>
                                            we are all about we are all about to the
                                            fullest and all content dining out or in!
                                            dining out or in!
                                        </p>
                                        <div style={{display: 'flex'}}>
                                            <div className={'small-size-location-icon'}>
                                                <LocationCity>
                                                    Hytech City
                                                </LocationCity>
                                            </div>
                                            <BookNowBtn/>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </Card>
                    </div>
                    <div className={'dot-card'}>
                        <div className={'dot-card_dottedemage-div2'}>
                            <img src={dotted} alt={'dotted'}/>
                        </div>
                    <Card>
                        <div
                            className={'card-emage-div'}
                            style={{
                                background: `url(${imgtwo})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'

                            }}>

                            <div className={'card-emage-div_ced'}>
                                <div className={'card-emage-div_ced_ced-content'}>
                                    <h2>Fire Water</h2>
                                    <p className={'card-emage-div_ced_ced-content_ced-text'}>
                                        we are all about we are all about to the
                                        fullest and all content dining out or in!
                                        dining out or in!
                                    </p>
                                    <div style={{display: 'flex'}}>
                                        <div className={'small-size-location-icon'}>
                                            <LocationCity>
                                                GachiBowli
                                            </LocationCity>
                                        </div>

                                        <BookNowBtn/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Card>
                </div>

                </div>

                <div style={{width: '40%'}}>
                    <div className={'less'}>
                        <img className={'lessthan'} src={greaterthan} alt={'lessthan'}/>
                        <p>See more</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SecondSectionCardContent;