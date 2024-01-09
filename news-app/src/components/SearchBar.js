import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  }

  return (

    <form className='search-form' onSubmit={handleSubmit}>
        <input
            type='text'
            placeholder='Search for news'
            value={searchTerm}
            onChange={handleInputChange}
        />
        <button className='submit-button' type='submit'>
        GO
        </button>
    </form>
  )
}

export default SearchBar