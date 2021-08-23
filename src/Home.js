import React from 'react';
import { makeStyles, ThemeProvider, AppBar, Toolbar, Typography, Button, IconButton, createMuiTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    // root:{
    //   background:'red',
    //   height:'100vh'
    // },
    appbar:{
      boxShadow:'none'
    },
    grow:{
      flexGrow: 1,
    },
    icons:{
      paddingRight: theme.spacing(2),
    }
  }));


const Home = () =>{
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <AppBar color="inherit" className={classes.appbar}>
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu" className={classes.icons}>
              <MenuIcon />
            </IconButton>
            <div className={classes.grow}/>
            <IconButton edge="start"  color="inherit" aria-label="menu" className={classes.icons}>
              <MenuIcon />
            </IconButton>
            <IconButton edge="start"  color="inherit" aria-label="menu" className={classes.icons}>
              <MenuIcon />
            </IconButton>
            <IconButton edge="start"  color="inherit" aria-label="menu" className={classes.icons}>
              <MenuIcon />
            </IconButton>
            <Button startIcon={<AccountCircle/>} variant="outlined" color="secondary">Fazer Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Home;