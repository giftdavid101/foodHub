import React from 'react';
import './searchbar.style.css'

const SearchBar = () => {
    return (
        <div className={'search-bar'}>
            <input placeholder={'search restaurant, food'}/>
            <button> Go</button>
        </div>
    );
};

export default SearchBar;