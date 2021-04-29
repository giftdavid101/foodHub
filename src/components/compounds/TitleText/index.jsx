import React from 'react';
import './titletext.style.css'


const TitleText = ({children}) => {
    return (
        <div className={'title-text'}>
            {children}
        </div>
    );
};

export default TitleText;