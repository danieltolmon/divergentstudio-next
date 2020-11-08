import css from 'styled-jsx/css';

export default css`
  .step {
    padding-right: 50px;
    margin: 30px 0;
    width: 300px;

    &-number {
      font-family: Graphik;
      font-size: 36px;
      text-align: left;
      margin: 0;
    }
    &-title {
      font-family: 'Graphik';
      font-size: 18px;
      line-height: 160%;
      text-align: left;
      font-weight: 600;
      margin: 0;
    }
    &-description {
      font-family: 'Graphik';
      font-weight: 400;
      font-size: 18px;
      line-height: 160%;
      text-align: left;
    }
  }

  @media only screen and (max-width: '768px') {
    .step {
      padding-right: 0px;
      min-width: 100%;
      max-width: 100%;
    }
  }
`;
