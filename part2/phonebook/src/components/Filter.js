import React, {useState} from 'react'

const Filter = ({persons}) => {
    const [ filteredPersons, setNewFilteredPersons] = useState([]);

    const handleFilterChange = (event) => {
        setNewFilteredPersons(
            persons.filter( person =>
                person.name.toLowerCase().includes(
                    event.target.value.toLowerCase()
                )
            )
        )
    }

    return (
        <div>
            <p>filter shown with <input onChange={handleFilterChange} /></p>
            {
                filteredPersons.map( person => (
                    <p key={person.name}>{person.name} {person.number}</p>
                ))
            }
        </div>
    )
}

export default Filter;