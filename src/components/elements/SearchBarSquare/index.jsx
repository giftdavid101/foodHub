import React from 'react';
import './searchbarsquare.style.css';

const SearchBarSquare = ({btnText = 'Go', placeholder = 'search restaurant', onSubmit, onChange, onClick}) => {
    return (
        <div>
            <form className={'search-bar'} onSubmit={onSubmit}>
                    <input placeholder={placeholder} onChange={onChange}/>
                <button className={'btn-squared-btn'} onClick={onClick}>{btnText}</button>
            </form>

        </div>
    );
};

export default SearchBarSquare;