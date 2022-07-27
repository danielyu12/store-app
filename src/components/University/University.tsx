import React from 'react';
import './University.scss';

export interface UniversityProps {
  name: string;
  websiteURL: string;
}

const University: React.FC<UniversityProps> = (props) => {
  return (
    <div className="card">
      <a href={`https://${props.websiteURL}`}>
        <h1 className="university-name">{props.name}</h1>
        <h1 className="university-url">{props.websiteURL}</h1>
      </a>
    </div>
  );
};

export default University;
