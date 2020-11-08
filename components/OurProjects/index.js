import React, { useEffect, useState } from 'react';
import styles from './styles';
import getProjects from 'api/getProject';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZES } from 'utils/screenSize';
import Profile from 'components/Profile';
import ProjectCard from 'components/ProjectCard';

function OurProjects() {
  const [projects, setProjects] = useState();

  useEffect(async () => {
    retrieveProjects();
  }, []);

  const retrieveProjects = async () => {
    const newprojects = await getProjects();
    setProjects(newprojects);
  };

  const isMobile = useMediaQuery({ maxWidth: SCREEN_SIZES.until.md });
  return (
    <div className="background-OProj">
      {!isMobile && (
        <div className="line">
          <div className="vl"></div>
        </div>
      )}
      <div className="container-OProj container">
        <div>
          <h1 className="section-title">
            <strong>
              Our
              <br />
              Portfolio
            </strong>
          </h1>
        </div>
        <div className="content-OProj">
          <div className="profiles">
            <h2 className="subtitle">
              We are an Iberian dupla, working from Lisbon. Sometimes from
              Barcelona.
            </h2>

            <div className="profiles-container">
              <Profile
                image={{ url: 'rita.png', altText: 'Rita Medina' }}
                name="Rita Medina"
                description="UX/UI designer"
                link="https://www.linkedin.com/in/rita-medina-920347186/"
              ></Profile>
              <Profile
                image={{ url: 'dani.png', altText: 'Daniel Toledo' }}
                name="Daniel Toledo"
                description="Full-stack developer"
                link="https://www.linkedin.com/in/danieltoledomonfort/"
              ></Profile>
            </div>
          </div>
          <div className="container-projects">
            {projects &&
              projects.data?.records.map(({ fields }) => (
                <ProjectCard
                  image={fields.image}
                  name={fields.name}
                  subtitle={fields.subtitle}
                  description={fields.description}
                  tags={fields.tags}
                  type={fields.type}
                  link={fields.link}
                  linkType={fields.linkType}
                />
              ))}
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}

export default OurProjects;
