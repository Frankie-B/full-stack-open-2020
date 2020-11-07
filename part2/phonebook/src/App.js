import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Alert from './components/Alert';
import personService from './services/persons';





function App() {
  const [persons, setPersons] = useState([]);
  const [filter, setNewFilter] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => { 
  personService
    .getAll()
    .then(initialPersons => {
    setPersons(initialPersons)
  })
}, [])

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Alert message={message} />
      <Filter filter={filter} setFilter={setNewFilter}/>
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} setPersons={setPersons} setMessage={setMessage} />
    </div>
  );
}

export default App;
