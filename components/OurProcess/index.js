import React from 'react';
import styles from './styles';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZES } from 'utils/screenSize';
import Step from 'components/OurProcessSteps';

const OurProcess = (props) => {
  const isMobile = useMediaQuery({ maxWidth: SCREEN_SIZES.until.md });
  return (
    <div className="background-OP">
      {!isMobile && (
        <div className="line">
          <div className="vl"></div>
        </div>
      )}
      <div className="container-OP container">
        <h1 className="section-title">
          <strong>
            Our <br />
            Process
          </strong>
        </h1>
        <div className="text-container">
          <h2 className="text-OP">
            <br />
            We are spealists in microsites and landingpages.
            <br />
            We do human-centric design, which means our focus is always the
            user.
            <br />
            We believe design and coding work better when together.
            <br />
            We do responsive, user-friendly and custom websites.
            <br />
          </h2>
          <div className="stepsProcess">
            <Step
              stepNumber={1}
              title="Research and Strategy"
              description="This phase it’s all about knowing your project and the users of
                your site. We use different tools, like desk research,
                questionnaries, interviews. After we start designing a strategy
                that add value to the project."
            ></Step>
            <Step
              stepNumber={2}
              title="Visual"
              description="We do simple and honest design, which means that is driven by a
              carefull designed strategy. Like this we make sure that is
              coherent with the nature of your project and with the needs of
              your users."
            ></Step>
            <Step
              stepNumber={3}
              title="Coding"
              description="The code is done side by side with the design. We make sure your
              site look good in different plataforms. We are always
              changelling our selfs to make your site more interative and
              intuitive to use as possible."
            ></Step>
          </div>
        </div>
        <div className="randomRedLine">
          <img src={'redline.png'} alt="randomRedLine" width={170} />
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default OurProcess;
