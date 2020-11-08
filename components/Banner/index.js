import React from 'react';
import styles from './styles';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZES } from 'utils/screenSize';

const Banner = (props) => {
  const isMobile = useMediaQuery({ maxWidth: SCREEN_SIZES.until.md });
  return (
    <div className="banner">
      {!isMobile && (
        <div className="icon">
          <img src={'codingdesignIcon.png'} alt="designCodingIcon" width={36} />
        </div>
      )}
      <button className="contact">
        {!isMobile && <h3 style={{ marginRight: '30px' }}>Let's Talk</h3>}
        <img src={'whatsapp.png'} alt="whatsappIcon" width={27} />
      </button>
      <div className="background-banner">
        <div className="container">
          <div className="text">
            <h1 className="text-title">
              <strong>GO DIVERGENT</strong> - for the ones looking to combine
              beautiful and honest design with interactive and professional
              coding.
            </h1>
            <div className="location">
              <img src={'location.png'} alt="locationIcon" width={14} />
              <p className="location-text">
                {'  from Península Ibérica, Lisbon & Barcelona'}
              </p>
            </div>
          </div>
          <div className="exploreButton">
            <button className="explore"></button>
            <p className="textExplore">Explore</p>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Banner;
