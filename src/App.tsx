import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import StylesGlobal from './styles/StylesGlobal';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const ThemeContext = createContext({
  getTheme: '',
  setTheme: (props?: any): any => {},
});

const App = () => {
  const [getTheme, setTheme] = useState('');

  return (
    <ThemeContext.Provider value={{ getTheme, setTheme }}>
      <ThemeProvider
        theme={() => {
          if (getTheme === dark.title) {
            return dark;
          }
          if (getTheme === light.title) {
            return light;
          }
          return dark;
        }}
      >
        <StylesGlobal />
        <Routes />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  const { getTheme, setTheme } = context;
  return { getTheme, setTheme };
}

export default App;
