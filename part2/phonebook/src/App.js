import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>debug: {newName}</div>
    </div>
  );
}

export default App;
