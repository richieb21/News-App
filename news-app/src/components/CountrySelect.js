import React from 'react'

const CountrySelect = ({ selectedCountry, onCountryChange }) => {
  return (
    <select className="select" value={selectedCountry} onChange={onCountryChange}>
      <option className='dropdown-item' value="">Select a country</option>
      <option className='dropdown-item' value="US">United States</option>
      <option className='dropdown-item' value="CA">Canada</option>
      <option className='dropdown-item' value="MX">Mexico</option>
    </select>
  )
}

export default CountrySelect