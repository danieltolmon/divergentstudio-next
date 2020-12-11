import css from 'styled-jsx/css';

export default css`
  .background-footer {
    background-color: #e7e0c4;
    display: flex;
    margin-top: 0px;
  }

  .container-footer {
    width: 100%;
    display: flex;
    padding: 70px 100px 100px 30px;
  }

  .footer-title {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 77px;
    z-index: 2;
    h4 {
      margin: 0;
      font-family: AriataDisplay;
      font-size: 2.25rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.4;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
    }
  }
  .contact-text {
    margin: 0;
    font-family: Graphik;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }
  .line-mobile {
    margin-left: 100px;
    .vl {
      border-right: 1px solid black;
      height: 160px;
      z-index: 2;
      position: absolute;
    }
    .circle {
      height: 150px;
      width: 150px;
      background-color: #dbd469;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      margin-top: 50px;
      left: 50px;
      z-index: 1;
    }
  }
  .footer-form {
    flex: 1;
  }
  @media only screen and (max-width: '768px') {
    .container-footer {
      flex-direction: column;
    }
    .contact-text {
      margin-top: 100px;
    }
  }
`;
