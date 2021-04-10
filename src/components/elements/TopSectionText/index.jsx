import React from 'react';
import './topsectiontext.style.css';

const TopSectionText = () => {
    return (
        <div className={'top-section-text container'}>
          <h1 className={'top-section-text_food'}>Food</h1>
            <p className={'top-section-text_p-text purple'}>Discover Restaurant</p>
            <p className={'top-section-text_p-text purple'}>&amp; Delicious Food</p>
        </div>
    );
};

export default TopSectionText;