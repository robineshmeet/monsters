import React, { useEffect, useState } from 'react';
import "./App.css"
import CardList from './components/car-list/card-list.component';
import SearchBox from './components/search-box/search-box.componet';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsterData => setMonsters(monsterData))
  }, [])

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox value={searchField} onChange={setSearchField}placeholder="Search Monster..."/>
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
