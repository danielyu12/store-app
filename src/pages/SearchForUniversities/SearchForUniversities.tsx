import axios from 'axios';
import React, { useState, useRef } from 'react';
import UniversitiesMap from '../../components/UniversitiesMap/UniversitiesMap';
import './SearchForUniversities.scss';

const SearchForUniversities: React.FC = () => {
  const [searchList, setSearchList] = useState<any>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (inputRef.current && inputRef.current.value === '') {
      alert('Please put a valid search');
    } else {
      axios
        .get(
          `http://universities.hipolabs.com/search?name=${
            inputRef.current && inputRef.current.value
          }`
        )
        .then((res) => {
          setSearchList(res.data);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="searchbar"
          type="text"
          ref={inputRef}
          placeholder="Search for your university"
        />
        <input type="submit" value="Search" />
      </form>
      <UniversitiesMap list={searchList} />
    </div>
  );
};

export default SearchForUniversities;
