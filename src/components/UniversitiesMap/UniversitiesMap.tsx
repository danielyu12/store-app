import React from 'react';
import University from '../University/University';
import './UniversitiesMap.scss';

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
