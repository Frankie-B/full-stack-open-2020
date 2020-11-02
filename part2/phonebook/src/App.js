import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  
  const [showPersons, setShowPersons] = useState(persons);
  const [newFilter, setNewFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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

// TODO - WORK ON 2.C DATA SERVERS
