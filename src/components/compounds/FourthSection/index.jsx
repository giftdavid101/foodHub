import React from 'react';
import './fourthsection.style.css';
import FourthSectionServices from "../FourthSectionServices";

const FourthSection = () => {
    return (
        <div className={'fourth-section'}>
            <div className={'fourth-section_fs-con container'}>
                <div className={'fourth-section_fs-con_fs-text'}>
                    <div className={'fourth-section_fs-con_fs-text_fst-title'} >
                        <h6 className={'sth'}>
                            <p>Our</p>
                            <p>Services!</p>
                        </h6>
                    </div>
                    <div className={'tc'}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </div>
                </div>
                <div>
                </div>
            </div>
<div className={'container'}>
    <FourthSectionServices/>

</div>

        </div>
    );
};

export default FourthSection;