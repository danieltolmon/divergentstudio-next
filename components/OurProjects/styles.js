import css from 'styled-jsx/css';

export default css`
  .background-OProj {
    display: flex;
    margin-top: 0px;
  }

  .container-OProj {
    width: 100%;
    padding: 0px 100px 100px 30px;
    margin-top: 0px;
  }

  .content-OProj {
    padding-left: 80px;
    padding-bottom: 100px;
  }

  .profiles {
    &-container {
      display: flex;
      justify-content: space-around;
    }
    .subtitle {
      padding-bottom: 30px;
      font-family: 'Graphik';
      font-weight: 400;
      font-size: 18px;
      text-align: left;
      width: 100%;
    }
  }

  .perfil {
    display: flex;
    justify-content: space-between;
  }

  .container-projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 110px;
  }

  .section-title {
    font-family: 'Ariata Display';
    font-weight: 400;
    font-size: 36px;
    text-align: justify;
  }

  .textoPerfil {
    display: inline-block;
    align-items: center;
    padding-left: 30px;
    line-height: 10px;
  }
  .textProject {
    text-align: justify;
  }

  @media only screen and (max-width: '768px') {
    .content-OProj {
      padding-left: 0px;
    }
    .container-OProj {
      width: 80%;
      padding-left: 70px;
    }
  }

  @media only screen and (max-width: '1085px') {
    .profiles-container {
      justify-content: flex-start;
      flex-direction: column;
    }
  }
`;
