import React from 'react'

const Persons = ({showPersons}) => {
  return (
  <ul>
    {showPersons.map((person, index) => <li key={index}>{person.name} {person.number}</li>)}
  </ul>
  )
}

export default Persons;
