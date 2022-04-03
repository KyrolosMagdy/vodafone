import React from 'react';
import { ThemeProvider } from '@mui/styles';
import MainPage from './MainPage/MainPage';
import { theme } from './components/ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
