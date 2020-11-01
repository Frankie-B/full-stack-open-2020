import React from 'react'

const Filter = ({filter, handleFilter}) => {
  return (
    <div>
      <label htmlFor="filter">Filter shown with</label>
      <input type="text" name="filter" value={filter} onChange={handleFilter} />      
    </div>
  )
}

export default Filter;