import React from 'react';
import styles from './styles';

const OurProcessStep = ({ stepNumber, title, description }) => {
  return (
    <div className="step">
      <h2 className="step-number">{stepNumber}</h2>
      <p className="step-title">{title}</p>
      <hr />
      <p className="step-description">{description}</p>
      <style jsx>{styles}</style>
    </div>
  );
};

export default OurProcessStep;
