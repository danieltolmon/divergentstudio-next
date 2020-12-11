import css from 'styled-jsx/css';

export default css`
  form {
    margin: auto;
  }
  input,
  textarea {
    margin: 10px 0;
    padding: 20px 0px 10px 0px;
    width: 100%;
    border: none;
    background-image: none;
    background-color: transparent;

    box-shadow: none;
    border-bottom: 1px solid black;

    font-family: Graphik;
    font-size: 1.125rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    text-align: left;
    color: #000000;

    &:focus {
      outline: none;
      &::placeholder {
        color: transparent;
      }
    }

    &::placeholder {
      font-family: Graphik;
      font-size: 1.125rem;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.8;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
      opacity: 0.6;
    }
  }
  button {
    float: right;
    padding: 7px 70px;
    margin-top: 20px;
    background: none;
    border: 1px solid black;
    font-family: Muller;
    font-size: 20px;
    font-weight: 200;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: right;
    color: black;
    cursor: pointer;

    &:hover {
      color: white;
      background-color: black;
    }
  }
`;
