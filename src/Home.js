import React from 'react';
import { 
  makeStyles, 
  ThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  createMuiTheme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppIcon from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles((theme) => ({
    // root:{
    //   background:'red',
    //   height:'100vh'
    // },
    appbar:{
      boxShadow:'none',
      zIndex: theme.zIndex.drawer + 1,
    },
    grow:{
      flexGrow: 1,
    },
    icons:{
      paddingRight: theme.spacing(2),
    },
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 240,
      borderRight: 'none'
    },
    menuIcon:{
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
    logo:{
      height: 30,
    }
  }));


const Home = () =>{
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <AppBar color="inherit" className={classes.appbar}>
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu" className={classes.menuIcon}>
              <MenuIcon />
            </IconButton>
            <img src="/images/preto.png" className={classes.logo}/>
            <div className={classes.grow}/>
            <IconButton edge="start"  color="inherit" aria-label="menu" className={classes.icons}>
              <VideoCall />
            </IconButton>
            <IconButton edge="start"  color="inherit" aria-label="menu" className={classes.icons}>
              <AppIcon />
            </IconButton>
            <IconButton edge="start"  color="inherit" aria-label="menu" className={classes.icons}>
              <MoreVert />
            </IconButton>
            <Button startIcon={<AccountCircle/>} variant="outlined" color="secondary">Fazer Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
      </div>
    );
}

export default Home;