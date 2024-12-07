import React from 'react';

const FilteredList = ({ items, searchText }) => {
    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <ul>
            {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );

    };

export default FilteredList;

