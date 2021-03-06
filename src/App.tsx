import * as React from 'react';
import IconGeneratorPage from './pages/IconGeneratorPage';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans JP';
    color: #414141;
    background-color: rgb(19, 59, 28);
  }
  html {
    min-width: 100vw;
    min-height: 100vh;
  }
`

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <IconGeneratorPage />
    </>
  );
}

export default App;
