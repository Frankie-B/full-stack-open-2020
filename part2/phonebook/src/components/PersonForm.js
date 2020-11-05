import React from 'react'

const PersonForm = ({handleSubmit, newName, handleNewName, newNumber, handleNewNumber}) => {
  return (
    <form onSubmit={handleSubmit}>
      name: <input name="name" value={newName} onChange={handleNewName} />
      <br />
      number: <input name="number" value={newNumber} onChange={handleNewNumber}/>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm;
