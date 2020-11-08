import React from 'react';
import styles from './styles';

function Us({ image, name, description, link }) {
  return (
    <div className="us-card">
      <img src={image.url} alt={image.altText} width={170} />
      <div className="us-text">
        <p className="us-title">
          <strong>{name}</strong>
        </p>
        <p className="us-description">{description}</p>

        <div style={{ textAlign: 'left' }}>
          <a
            className={`us-link ${name === 'Daniel Toledo' && 'green'}`}
            href={link}
            target="_blank"
          >
            more about me
          </a>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}

export default Us;
