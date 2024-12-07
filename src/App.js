import React, { useState } from 'react';
import './App.css';
import FilteredList from '../src/Components/FilteredList';
import SearchBox from '../src/Components/SearchBox';
import Header from '../src/Components/Header';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [items] = useState([
    'Scarface',
    'The Godfather',
    'The Godfather II',
    'The Godfather III',
    'The Dark Knight',
    'The Dark Knight Rises',
    'The Dark Knight Returns',
    'The Dark Knight Begins',
    'The Dark Knight Ends',
    'The Dark Knight Forever',
    'Blow',
    'The Departed',
    'American Gansgter',
    'Casino',
    'Goodfellas',
    'Heat',
    'Carlitos Way',
    'Donnie Brasco',
    'Pulp Fiction',
    'Reservoir Dogs',
  ]);

  return (
    <div className="App">
      <Header />
      <SearchBox setSearchText={setSearchText} />
      <FilteredList items={items} searchText={searchText} />
    </div>
  );
};

export default App;