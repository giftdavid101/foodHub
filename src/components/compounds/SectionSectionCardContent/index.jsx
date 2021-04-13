import React from 'react';
import './secondsectioncardcontent.style.css'
import Card from "../../elements/Card";
import imgone from '../../../thumbnails/food-photographer.png'
import imgtwo from '../../../thumbnails/food-photographer2.png'
import greaterthan from '../../../Greater.svg'
import dotted from '../../../thumbnails/dotted.png'
import {MdLocationOn} from "react-icons/all";
import BookNowBtn from "../../elements/BookBtn";

const SecondSectionCardContent = () => {
    return (
        <div className={'second-section-card-content'}>
            <div className={'second-section-card-content_ssct-con'}>
                <div className={'second-section-card-content_ssct-con_card-holda'}>
                    <div className={'second-section-card-content_ssct-con_card-holda_dotted-emage-div a'}>
                        <img src={dotted} alt={'dotted'}/>
                    </div>
                    <div className={'second-section-card-content_ssct-con_card-holda_dotted-emage-divv a '}>
                        <img src={dotted} alt={'dotted '}/>
                    </div>


                    <Card>
                        <div
                            className={'card-emage-div'}
                            style={{
                                background: `url(${imgone})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'

                            }}>
                          <div className={'card-emage-div_ced-content'}>
                              <div style={{width:'80%',margin:'auto' }}>
                                  <h2>Fire Water</h2>
                                  <p style={{
                                      fontSize:'10px',
                                      marginBottom:'15px'
                                  }
                                  }>
                                      we are all about we are all about to the
                                      fullest and all content dining out or in!
                                      dining out or in!
                                  </p>
                                  <div style={{display:'flex'}}>
                                      <div className={'location_location-name'}>
                                          <MdLocationOn color={'white'} size={20}/>
                                          <span className={'hytech'}>Hytech City</span>
                                      </div>
                                      <BookNowBtn/>
                                  </div>
                              </div>

                          </div>
                        </div>
                    </Card>
                    <Card>
                        <div
                            className={'card-emage-div'}
                            style={{
                                background: `url(${imgtwo})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'

                            }}>

                            <div className={'card-emage-div_ced-content'}>
                                <div style={{width:'80%',margin:'auto' }}>
                                    <h2>Fire Water</h2>
                                    <p style={{
                                        fontSize:'10px',
                                        marginBottom:'15px'
                                    }
                                    }>
                                        we are all about we are all about to the
                                        fullest and all content dining out or in!
                                        dining out or in!
                                    </p>
                                    <div style={{display:'flex'}}>
                                        <div className={'location_location-name'}>
                                            <MdLocationOn color={'white'} size={20}/>
                                            <span className={'hytech'}>Hytech City</span>
                                        </div>
                                        <BookNowBtn/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Card>

                </div>

                <div style={{width:'40%'}}>
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