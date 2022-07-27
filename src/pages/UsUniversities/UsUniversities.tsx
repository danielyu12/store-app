import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UniversitiesMap from '../../components/UniversitiesMap/UniversitiesMap';
import './UsUniversities.scss';

const UsUniversities: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(-1);
  const [list, setList] = useState<any>([]);
  const [curList, setCurList] = useState<any>([]);
  useEffect(() => {
    axios
      .get('http://universities.hipolabs.com/search?country=United States')
      .then(async (res) => {
        setList(res.data);
        setCurList(list.slice(0, 100));
      });
  }, []);

  useEffect(() => {
    const lowInd = pageNumber * 100;
    const highInd = (pageNumber + 1) * 100;
    setCurList(list.slice(lowInd, highInd));
  }, [list, pageNumber]);

  const handlePageIncrement = (event: React.MouseEvent<HTMLElement>) => {
    setPageNumber((prev) => prev + 1);
    console.log(pageNumber);
  };

  const handlePageDecrement = (event: React.MouseEvent<HTMLElement>) => {
    setPageNumber((prev) => prev - 1);
  };

  return (
    <div className="page">
      <div>
        {pageNumber < 1 ? (
          <button disabled>Prev Page</button>
        ) : (
          <button onClick={handlePageDecrement}>Prev Page</button>
        )}
        {pageNumber === Math.floor(list.length / 100) ? (
          <button disabled>Next Page</button>
        ) : (
          <button onClick={handlePageIncrement}>Next Page</button>
        )}
      </div>
      <div>You are on page: {pageNumber + 1}</div>
      <UniversitiesMap list={curList} />
    </div>
  );
};

export default UsUniversities;
