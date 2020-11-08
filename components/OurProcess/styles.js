import css from 'styled-jsx/css';

export default css`
  .background-OP {
    background-color: rgba(231, 224, 196, 0.34);
    display: flex;
    padding-top: 100px;
    height: 100%;
  }

  .line {
    margin-left: 100px;
  }
  .vl {
    border-right: 1px solid black;
    height: 100%;
  }

  .container-OP {
    width: 100vw;
    padding: 0px 100px 100px 30px;
    margin-top: 0px;
  }

  .text-container {
    padding-left: 80px;
  }

  .section-title {
    font-family: 'Ariata Display';
    font-weight: 400;
    font-size: 36px;
    text-align: justify;
  }

  .text-OP {
    font-family: 'Graphik';
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    text-align: left;
  }

  .stepsProcess {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 70px;
  }

  .step {
    padding-right: 50px;
    min-width: 265px;
    max-width: 300px;
  }

  .randomRedLine {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 70px;
  }

  @media only screen and (max-width: '768px') {
    .container-OP {
      width: 80%;
      padding: 0px 30px 100px 30px;
      margin-top: 0px;
      padding-left: 70px;
    }
    .text-container {
      padding-left: 0px;
    }
    .step {
      padding-right: 0px;
      min-width: 100%;
      max-width: 100%;
    }
  }
`;
