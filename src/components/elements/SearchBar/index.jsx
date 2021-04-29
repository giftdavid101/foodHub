import React from 'react';
import './searchbar.style.css'

const SearchBar = ({btnText = 'Go', placeholder = '', onSubmit, onChange, onClick}) => {
    return (
        <form className={'search-bar'} onSubmit={onSubmit}>
            <input placeholder={placeholder} onChange={onChange}/>
            <button className={'btn-radius-btn'} onClick={onClick}>{btnText}</button>
        </form>
    );
};

export default SearchBar;