import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/ui/theme';

import MainPage from './MainPage/MainPage';
import HeaderComponent from './components/header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
