import { useState } from 'react';
import { Input, FormButton } from './Form.styled';

export const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const onInputChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={onInputChange}
        placeholder="Enter Movie"
      />
      <FormButton type="submit">Search</FormButton>
    </form>
  );
};
