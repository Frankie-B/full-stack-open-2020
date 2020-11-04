import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

function App() {
  const [persons, setPersons] = useState([]);
  const [showPersons, setShowPersons] = useState(persons);
  const [newFilter, setNewFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    console.log('Effect');

    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('We have data!!', response);
        setPersons(response.data);
      })
  },[])


  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = { name: newName , number: newNumber};
    const unique = persons.filter(person => person.name.toLowerCase().includes(newName.toLowerCase()));
    unique.length === 0 ? setPersons(persons.concat(newPerson)) : alert(`${newName} is already in phonebook`);
    setNewName('');
    setNewNumber('');
  }

  const handleFilter = (event) => {
    let filter = event.target.value;
    setNewFilter(filter);

    filter === '' ? setShowPersons(persons) : setShowPersons(persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())))
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Filter filter={newFilter} handleFilter={handleFilter} />
      <br />
      <br />
      <h3>Add a new</h3>
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber}/>
      <h3>Numbers</h3>
      <Persons showPersons={showPersons}/>
      <div>debug: {newName} {newNumber}</div>
    </div>
  );
}

export default App;
