import React, { useState, useEffect } from 'react';
import personService from './services/persons'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

function App() {
  const [persons, setPersons] = useState([]);
  const [notification, setNotification]  = useState(null);

  useEffect(() => {
    personService
    .getAll()
    .then(response => {
        console.log(response)
    setPersons(response.data)
  })
}, [])

  return (
    <div className="App">
      <h2>Phonebook</h2>
        <Notification notification={notification}/>
        <Filter persons={persons}/>

        <h3>Add a new</h3>
        <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotification}/>

        <h3>Numbers</h3>
        <Persons persons={persons} setPersons={setPersons} setNotification={setNotification}/>
    </div>
  );
}

export default App;
