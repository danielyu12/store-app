import React from 'react';
import './University.css';

export interface UniversityProps {
  name: string;
  websiteURL: string;
}

const University: React.FC<UniversityProps> = (props) => {
  return (
    <div className="card">
      <a href={`https://${props.websiteURL}`}>
        <h1 className="product-price">{props.name}</h1>
        <h1 className="product-title">{props.websiteURL}</h1>
      </a>
    </div>
  );
};

export default University;
