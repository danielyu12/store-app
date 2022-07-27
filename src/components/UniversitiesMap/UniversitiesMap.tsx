import React, { useEffect, useState } from 'react';
import { UniversityProps } from '../University/University';
import University from '../University/University';
import axios from 'axios';
import './UniversitiesMap.css';

interface UniversitiesMapProps {
  list: any[];
}

const UniversitiesMap: React.FC<UniversitiesMapProps> = (props) => {
  return (
    <React.Fragment>
      <div className="cards">
        {props.list.map(
          (school: { name: string; domains: string[] }, index: number) => {
            return (
              <University
                name={school.name}
                websiteURL={school.domains[0]}
                key={index}
              />
            );
          }
        )}
      </div>
    </React.Fragment>
  );
};

export default UniversitiesMap;
