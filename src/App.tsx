import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppContent } from './AppContent';

function App() {
  return (
    <ThemeProvider>
      <AppContent /> 
    </ThemeProvider>
  );
}

export default App;