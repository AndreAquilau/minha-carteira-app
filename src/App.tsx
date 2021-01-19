import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import StylesGlobal from './styles/StylesGlobal';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <StylesGlobal />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
