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
  ListSubheader,
  Divider,
  Box
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppIcon from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import Explore from '@material-ui/icons/Explore';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import History from '@material-ui/icons/History';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import WatchLater from '@material-ui/icons/WatchLater';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import AddCircle from '@material-ui/icons/AddCircle';

import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles((theme) => ({
    root:{
      background: '#f9f9f9',
      height: '100vh'
    },
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
    },
    listeItem:{
      paddingTop:4,
      paddingBottom:4,
    },
    listItemtext:{
      padding:0,
      fontSize:14,
    },
    listItemIcon:{
      marginLeft: 11,
     
    },
    listsubheader:{
      textTransform: 'uppercase',
      fontWeight: 'bold',
      textAlign:'center'
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
        <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper, }}>
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<HomeIcon />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Início' />
              </ListItem>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<Explore />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Explorar' />
              </ListItem>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<Subscriptions />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Inscrições' />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<VideoLibrary />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Biblioteca' />
              </ListItem>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<History />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Histórico' />
              </ListItem>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<PlayCircleOutline />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Seus vídeos' />
              </ListItem>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<WatchLater />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Assistir mais tarde' />
              </ListItem>
            </List>
            <Divider />
            <Box p={4} >
              <Typography variant="body2">Faça login para curtir vídeos, comentar e se inscrever.</Typography>
              <Box mt={1} >
                <Button startIcon={<AccountCircle/>} variant="outlined" color="secondary">Fazer Login</Button>
              </Box>    
            </Box>
            <Divider />
            <List subheader={<ListSubheader classes={{root: classes.listsubheader}} >O Melhor do YOutube</ListSubheader>}>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<AddCircle />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Música' />
              </ListItem>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<AddCircle />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Esportes' />
              </ListItem>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<AddCircle />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Jogos' />
              </ListItem>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<AddCircle />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Filmes' />
              </ListItem>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<AddCircle />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Notícias' />
              </ListItem>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<AddCircle />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Ao vivo' />
              </ListItem>
              <ListItem classes={{root: classes.listeItem}}>
                <ListItemIcon classes={{root: classes.listItemIcon}}>{<AddCircle />}</ListItemIcon>
                <ListItemText classes={{primary: classes.listItemtext}} primary='Aprender' />
              </ListItem>
            </List>

          </div>
        </Drawer>
      </div>
    );
}

export default Home;