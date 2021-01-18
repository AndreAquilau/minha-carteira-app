import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import StylesGlobla from './styles/StylesGlobal';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <StylesGlobla />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
