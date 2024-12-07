import React from 'react';

const SearchBox = ({ setSearchText}) => {
    const handleChange = event => {
        setSearchText(event.target.value);
    };

    return (
        <input
            type="text"
        placeholder="Buscar..."
        onChange={handleChange}
        />
    );
};

export default SearchBox;