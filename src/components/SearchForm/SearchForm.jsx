import React, { useState } from 'react';

const SearchForm = ({ searchSubmit }) => {
  const [value, setValue] = useState('');

  const handleSearchChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value.length === 0) {
      return;
    }
    searchSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={value}
        onChange={handleSearchChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
