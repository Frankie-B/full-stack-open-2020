import React from 'react'
import personService from '../services/persons'

const Person = ({person, setPersons}) => {
  const handleDeleteClick = (event) => {
    if( window.confirm(`Delete ${person.name}?`) ) {
      console.log('Deleting', person);
        personService
          .remove(person.id)
          .catch( (error) => {
            console.log('error', error);
          })

        personService
          .getAll()
          .then( response => {
            console.log(`Renewing $persons to`, response.data);
            setPersons(response.data);
          })
    }
  }

  return (
      <div>
        <p>{person.name} {person.number} <button onClick={handleDeleteClick}>delete</button></p>
      </div>
  )
}

const Persons = ({persons, setPersons}) => {
  return (
      <div>
        {persons.map( person => (
                <Person key={person.name} person={person} setPersons={setPersons} />
            )
        )}
      </div>
  )
}

export default Persons;