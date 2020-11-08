import css from 'styled-jsx/css';

export default css`
  .us-card {
    display: flex;
  }

  .us-text {
    margin-left: 30px;
    margin-top: 15px;
    height: 100px;
    width: 180px;
  }

  .us-title {
    font-family: Graphik;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin: 0;
    margin-bottom: 5px;
  }

  .us-description {
    font-family: Graphik;
    font-size: 18px;
    text-align: left;
    margin: 0;
    margin-bottom: 38px;
  }

  .us-link {
    width: 100%;
    font-family: Graphik;
    font-size: 18px;
    text-align: left;
    color: black;
    margin-right: auto;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 0px;
      height: 12px;
      position: absolute;
      bottom: -5px;
      left: -5px;
      z-index: -1;
      background-color: #ed6557;
      opacity: 0.4;
      -webkit-transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }

    &:after {
      content: '';
      display: block;
      background-image: url('/icons/arrow-right.svg');
      background-size: 100% 100%;
      background-position: center center;
      width: 22px;
      height: 6px;
      position: absolute;
      right: -28px;
      top: 50%;
      margin-top: -2px;
    }

    &:hover:before {
      height: 12px;
      width: 140px;
    }
  }
  .green {
    &:before {
      background-color: #8ab449;
    }
  }

  @media only screen and (max-width: '1085px') {
    .us-card:nth-child(2) {
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: '524px') {
    .us-card {
      flex-direction: column;
    }
    .us-text {
      margin-left: 0px;
    }
  }
`;
