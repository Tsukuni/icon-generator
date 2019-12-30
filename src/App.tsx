import * as React from 'react';
import IconGeneratorPage from './pages/IconGeneratorPage';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans JP';
    background-color: rgb(19, 59, 28);
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
