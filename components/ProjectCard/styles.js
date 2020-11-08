import css from 'styled-jsx/css';

export default css`
  .project-container {
    width: 380px;
    height: 480px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project {
    &-name {
      font-family: Graphik;
      font-size: 24px;
      line-height: 1.4;
      font-weight: 600;
      margin: 0;
    }
    &-subtitle {
      font-family: Graphik;
      font-size: 18px;
      line-height: 1.4;
      margin: 0;
    }
    &-description {
      font-family: Graphik;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.4;
      margin: 0;
    }

    &-tags,
    &-type {
      font-family: Graphik;
      font-size: 14px;
      line-height: 1.4;
      margin: 0;
    }
    &-button {
      font-family: Graphik;
      font-size: 18px;
      margin: 0;
      line-height: 5.4;
      text-decoration: none;
      padding: 16px 58px;
      border: 2px solid black;
      color: black;
      cursor: pointer;

      &:hover {
        color: white;
        background-color: black;
      }
    }
  }
`;
