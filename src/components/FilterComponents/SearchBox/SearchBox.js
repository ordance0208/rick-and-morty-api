import { useEffect, useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ searchFor, setQueryString }) => {
  const [searchText, setSearchText] = useState('');

  const updateSearchText = (e) => {
    const trimmedText = e.target.value.trim();
    setSearchText(trimmedText);
  };

  const updateQueryString = () => {
    setQueryString(searchText);
  };

  useEffect(updateQueryString, [searchText]);

  return (
    <div className="search-box">
      <input
      onChange={updateSearchText}
      placeholder={`Search all ${searchFor}...`}
      className="search-field"
    />
    </div>
  );
};

export default SearchBox;
