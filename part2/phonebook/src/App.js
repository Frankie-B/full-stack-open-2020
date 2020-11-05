import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Alert from './components/Alert';
import personsService from './services/persons';

// Generating random number between 1 and 1000
const randomNumber = Math.floor(Math.random() * 1000) + 1;

function App() {
  const [persons, setPersons] = useState([]);
  // const [showPersons, setShowPersons] = useState(persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [alerts, setAlerts] = useState([]);


  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);


  // const handleNewName = (event) => {
  //   setNewName(event.target.value);
  // }

  // const handleNewNumber = (event) => {
  //   setNewNumber(event.target.value);
  // }

  const filter = () => {
    return persons.filter(person => person.name.toLowerCase().includes(newName.toLowerCase()));
  }

  const handleInputChange = (event, type) => {
    switch (type) {
      case newFilter:
        setNewFilter(event.target.value);        
        break;
      case 'name':
        setNewName(event.target.value);
        break;
      case 'number':
        setNewNumber(event.target.value);    
      default:
        break;
    }
  }

  const clearFields = () => {
    setNewName('');
    setNewNumber('');
  }

  const createPerson = () => {
    const person = { name: newName, number: newNumber }
    return person;
  }


  // Create a new person
  const addPerson = () => {
    const person = persons.find(person => person.name === newName);
    const update = window
      .confirm(`${person.name} is already added to the phonebook, ` + 'replace the old number with a new one?');
    
    if (update) {
      const updatedPerson = { ...person, number: newNumber }
      const id = person.id;
      return personsService
        .update(id, updatedPerson)
        .then(returnPerson => {
          setPersons(persons.map((person) => (person.id !== id ? person : returnPerson)));
          queueAlert([
            {
              type: `info`,
              message: `${returnPerson.name}'s number updated to ${returnedPerson.number}`,
            },
          ]);
          return true;
        }).catch(error => {
          queueAlert([
            {
              type: `error`,
              message: `Contact person "${person.name}" has already been removed from the server`,
            },
          ]);
          setPerson(person.filter(person => person.id !== id))
        });
    } else { 
      return Promise.resolve(false);
    }
  }

  const handleErrors = () => {
    const errorMessages = error.response.status;

    if (errorMessages.length > 0) {
      const alerts = errorMessages.map(message => {
        return {
          type: 'error',
          message: message,
        }
      });
      queueAlert(alerts)
    } else {
      throw error;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameExists = persons.some(person => person.name === newName);

    if (nameExists) {
      addPerson().then(updated => {
        if (updated) {
          console.log('Person updated successfully')
        } else if (!updated) {
          console.log('User did not update person')
        }
        clearFields;
      });
    } else {
      const peson = createPerson
    }
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Filter filter={newFilter} handleFilter={handleFilter} />
      <br />
      <br />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber} 
        />
      <h3>Numbers</h3>
      <Persons showPersons={showPersons}/>
      <div>debug: {newName} {newNumber}</div>
    </div>
  );
}

export default App;
