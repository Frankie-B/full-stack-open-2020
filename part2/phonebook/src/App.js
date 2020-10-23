import React, { useState } from 'react';
// import Person from './components/Person';

function App() {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = { name: newName };
    setPersons(persons.concat(newPerson));
    setNewName('');
  }


  return (
    <div className="App">
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => <li key={index}>{person.name}</li>)}
      </ul>

      <div>debug: {newName}</div>
    </div>
  );
}

export default App;
