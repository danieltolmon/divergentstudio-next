import css from 'styled-jsx/css';

export default css`
  .icon {
    position: fixed;
    left: 40px;
    top: 30px;
    text-align: right;
  }
  .contact {
    position: fixed;
    right: 5vw;
    top: 30px;
    text-align: right;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 53px;
    max-width: 220px;
    padding: 0 25px;
    background-color: #000000;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    z-index: 5;
    &:focus {
      outline: none;
    }
    &:hover {
      text-decoration: underline;
    }
  }

  .background-banner {
    width: 100vw;
    height: 100vh;
    background-image: url('/background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .text {
    margin-left: auto;
    min-width: 500px;
    max-width: 768px;
    padding-right: 40px;
    text-align: left;
  }

  .text-title {
    font-family: 'Ariata Display';
    font-weight: 400;
    font-size: 2rem;
    line-height: 50px;
    text-align: justify;
  }

  .location {
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .location-text {
    font-family: 'Ariata Display';
    font-weight: 400;
    font-size: 18px;
    color: #898989;
    padding-left: 8px;
  }

  .exploreButton {
    position: absolute;
    right: 100px;
    text-align: right;
    bottom: 70px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .explore {
    width: 80px;
    height: 80px;
    background: url('/exploreIcon.png') no-repeat;
    background-position: center;
    background-size: cover;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    &:focus {
      outline: none;
    }
  }

  .explore:hover {
    background: url('/exploreIconActive.png') no-repeat;
    background-position: center;
    background-size: cover;
  }

  .textExplore {
    font-family: Graphik;
    font-weight: bold;
    font-size: 18px;
  }

  @media only screen and (max-width: '768px') {
    .text {
      min-width: 80%;
      max-width: 100%;
      margin: 0;
      padding: 0px 30px 100px 30px;
    }

    .text-title {
      font-family: 'Ariata Display';
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 40px;
      text-align: left;
    }
    .explore {
      width: 60px;
      height: 65px;
    }
    .exploreButton {
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 140px;
    }

    // .contact {
    //   bottom: 30px;
    //   top: auto;
    // }
  }
`;
