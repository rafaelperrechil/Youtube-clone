
import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core';
import Home from './Home';

// import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
    background: 'red',
  }
});

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000'
      },
      secondary: {
        main: '#065fd4'
      }
    }
  });

  return (
    <ThemeProvider theme={theme} >
      <Home />
      
    </ThemeProvider>
  );
}

export default App;
