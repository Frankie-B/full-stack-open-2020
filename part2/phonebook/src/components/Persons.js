import React from 'react'
import personService from '../services/persons'

const Person = ({person, setPersons, setNotification}) => {
    const handleDeleteClick = (event) => {
        event.preventDefault()
    if( window.confirm(`Delete ${person.name}?`) ) {
      console.log('Deleting', person);
        personService
            .remove(person.id)
            .then( response => {
                console.log(response.data);
                setNotification({
                    message:`Successfully removed ${person.name} from phonebook`,
                    type:'success'
                });
                setTimeout(() => setNotification(null), 5000);
            })
            .catch( error => {
                console.log('error', error);
                setNotification({
                    message:`Information of ${person.name} has already been remove from server`,
                    type:'error'
                });
                setTimeout(() => setNotification(null), 5000);
            });

        personService
          .getAll()
          .then( response => {
            console.log(`Refreshing contact list`, response.data);
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

const Persons = ({persons, setPersons, setNotification}) => {
  return (
      <div>
        {persons.map( person => (
                <Person key={person.name} person={person} setPersons={setPersons} setNotification={setNotification}/>
            )
        )}
      </div>
  )
}

export default Persons;