import React from 'react';
import './search-box.styles.css';

export  const SearchBox = ({placeholder, searchChange}) => {
  return (
     <input
        className='search'
        type="text"
        placeholder={placeholder}
        onChange={searchChange}
     />
  );

}