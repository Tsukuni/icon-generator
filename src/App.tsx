import * as React from 'react';
import IconGeneratorPage from './pages/IconGeneratorPage';
import { Reset } from 'styled-reset';

const App: React.FC = () => {
  return (
    <div className="App">
      <Reset />
      <IconGeneratorPage />
    </div>
  );
}

export default App;
