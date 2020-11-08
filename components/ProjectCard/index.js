import React from 'react';
import styles from './styles';

function ProjectCard({
  image,
  name,
  subtitle,
  description,
  tags,
  type,
  link,
  linkType,
}) {
  return (
    <div className="project-container">
      {image && (
        <img
          src={image[0].url}
          width="350px"
          height="250px"
          style={{ objectFit: 'cover' }}
        />
      )}
      <div className="textProject">
        <h2 className="project-name">{name}</h2>
        <p className="project-subtitle">{subtitle}</p>
        <p className="project-description"> {description}</p>
        <div className="project-tags">{tags.join(', ')}</div>
        <p className="project-type"> {type}</p>
        <a className="project-button" href={link} target="_blank">
          {linkType === 'site' ? 'Visit the site' : 'Consult the process'}
        </a>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}

export default ProjectCard;
