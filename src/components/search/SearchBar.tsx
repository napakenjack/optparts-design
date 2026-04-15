import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SearchBarProps = { defaultValue?: string; large?: boolean };

const SearchBar = ({ defaultValue = '', large = false }: SearchBarProps) => {
  const [query, setQuery] = useState(defaultValue);
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form className={`search-bar ${large ? 'search-bar--large' : ''}`} onSubmit={onSubmit}>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by article, brand, or part name (e.g. 90915, Bosch, brake disc)"
        aria-label="Search parts"
      />
      <button type="submit">Find Offers</button>
    </form>
  );
};

export default SearchBar;
