
import React, { useState } from 'react';
import { 
  makeStyles,
  ThemeProvider,
  createMuiTheme 
} from '@material-ui/core';
import Home from './Home';

// import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
    background: 'red',
  }
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#232323' : '#fff',
      },
      secondary: {
        main: '#3EA6FF'
      },
      background:{
        defaul:  darkMode ? '#232323' : '#fff',
        dark:  darkMode ? '#181818' : '#fff',
        paper:  darkMode ? '#232323' : '#fff',
      }
    }
  });

  return (
    <ThemeProvider theme={theme} >
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
      
    </ThemeProvider>
  );
}

export default App;
