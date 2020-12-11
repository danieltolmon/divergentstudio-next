import React from 'react';
import styles from './styles';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZES } from 'utils/screenSize';
import Form from '../Form';

const Footer = (props) => {
  const isMobile = useMediaQuery({ maxWidth: SCREEN_SIZES.until.md });
  return (
    <div className="background-footer">
      {!isMobile && (
        <div className="line-mobile">
          <div className="circle" />
          <div className="vl"></div>
        </div>
      )}
      <div className="container-footer container">
        <div className="footer-title">
          <h4>
            You want to go digital?
            <br /> talk to us!
          </h4>
          {!isMobile && (
            <p className="contact-text">
              OR:
              <br />
              PT +351-916283976
              <br />
              ES +34-692461556
              <br />
              divergent design@gmail.com
            </p>
          )}
        </div>
        <div className="footer-form">
          <Form></Form>
        </div>
        {isMobile && (
          <p className="contact-text">
            OR:
            <br />
            PT +351-916283976
            <br />
            ES +34-692461556
            <br />
            divergent design@gmail.com
          </p>
        )}
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Footer;
