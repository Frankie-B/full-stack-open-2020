import React, { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456' }]);
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
    const unique = persons.filter(person => person.name.toLocaleLowerCase().includes(newName.toLocaleLowerCase()));
    unique.length === 0 ? setPersons(persons.concat(newPerson)) : alert(`${newName} is already in phonebook`);
    setNewName('');
    setNewNumber('');
  }


  return (
    <div className="App">
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <br/>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => <li key={index}>{person.name} {person.number}</li>)}
      </ul>

      <div>debug: {newName}</div>
    </div>
  );
}

export default App;
