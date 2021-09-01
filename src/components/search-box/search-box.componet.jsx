import React from 'react';
import "./search-box-styles.css"

const SearchBox = ({ value, onChange,placeholder }) => (
    <input
        className="search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
    />
)

export default SearchBox
