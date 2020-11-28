import React, { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons, setNotification }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameSubmit = (event) => {
    event.preventDefault();
    console.log('persons', persons);
    const foundPerson = persons.find( person => person.name === newName );
    if( foundPerson ) {
      // Update existing person's number
      if( window.confirm(`${foundPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
            .update({...foundPerson, number:newNumber}, foundPerson.id);

        personService
            .getAll()
            .then( response => setPersons(response.data) )

        setNewName('');
        setNewNumber('');
        setNotification({
          message:`Updated phone number of ${foundPerson.name}`,
          type:'success'
        });
        setTimeout(() => setNotification(null), 5000);
      }
    } else {
      // Add new person to db
      const newPerson = {name: newName, number: newNumber}
      console.log('Creating', newPerson);
      personService
          .create(newPerson)
          .then( response => {
            console.log(response.data)
            setNewName('');
            setNewNumber('');
            setNotification({
              message:`Added ${newPerson.name}`,
              type:'success'
            });
            setTimeout(() => setNotification(null), 5000);
          })
          .catch( error => {
            console.log('error', error);
            setNotification({
              message:`Failed to add ${newPerson.name}`,
              type:'error'
            });
            setTimeout(() => setNotification(null), 5000);
          });

      personService
          .getAll()
          .then( response => setPersons(response.data) )
    }
  }

  return (
    <form onSubmit={handleNameSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm