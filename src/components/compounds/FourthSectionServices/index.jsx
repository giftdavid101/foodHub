import React from 'react';
import meeting from '../../../meeting.svg'
import dish from '../../../dish.svg'
import scooter from '../../../scooter.svg'
import './fourthsectionservices.style.css'
import greaterArrow from '../../../greaterthan arrow.svg'
import lessArrow from '../../../lessthan arrow.svg'

const FourthSectionServices = () => {
    return (
        <div className={'fourth-section-services'}>
            <div className={'fourth-section-services_fss-con'}>
                <div>
                    <div className={'one'}>
                        <div className={'emage'}>
                            <img src={meeting} alt={'meeting'}/>
                        </div>
                        <div className={'arr-div1'}>
                            <div className={'null'}>{''}</div>
                            <div className={'null'}>{''}</div>
                            <div className={'null'}>{''}</div>
                            <div className={'greater-arr'}>
                                <img src={lessArrow} alt={'greaterarrow'}/>
                            </div>
                        </div>

                        <div className={'text-div'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod.
                        </div>
                    </div>

                    <div className={'one'}>
                        <div className={'text-div'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod.
                        </div>
                        <div className={'arr-div2'} >
                            <div className={'null'}>{''}</div>
                            <div className={'null'}>{''}</div>
                            <div className={'null'}>{''}</div>
                            <div className={'less-arr'}>
                                <img src={greaterArrow} alt={'greaterarrow'}/>
                            </div>
                        </div>


                        <div className={'emage'}>
                            <img src={dish} alt={'meeting'}/>
                        </div>
                    </div>

                </div>
                <div className={'two'}>


                    <div className={'scooter'}>
                        <img src={scooter} alt={'meeting'}/>
                    </div>
                    <div className={'scooter-text-div'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FourthSectionServices;