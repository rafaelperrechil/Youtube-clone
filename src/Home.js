import React from 'react';
import { 
  makeStyles, 
  ThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider,
  Box,
  Hidden,
  Switch,
  Grid
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
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
      background: theme.palette.background.dark,
      height: '100vh',
      padding:0
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


  const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Lucas Nhimi',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Lucas Nhimi',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Lucas Nhimi',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb7.png',
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Lucas Nhimi',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb8.png',
    },
  ];


const Home = ({darkMode, setDarkMode}) =>{
    const classes = useStyles();
    const theme = useTheme();

    return(
      <div className={classes.root}>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <IconButton edge="start" aria-label="menu" className={classes.menuIcon}>
              <MenuIcon />
            </IconButton>
            <img src={theme.palette.type == 'dark' ? '/images/branco.png' : '/images/preto.png'} className={classes.logo}/>
            <div className={classes.grow}/>
            <Switch value={darkMode} onChange={() => { setDarkMode(!darkMode)}} className={classes.icons}/>
            <IconButton edge="start" aria-label="menu" className={classes.icons}>
              <VideoCall />
            </IconButton>
            <IconButton edge="start" aria-label="menu" className={classes.icons}>
              <AppIcon />
            </IconButton>
            <IconButton edge="start" aria-label="menu" className={classes.icons}>
              <MoreVert />
            </IconButton>
            <Button startIcon={<AccountCircle/>} variant="outlined" color="secondary">Fazer Login</Button>
          </Toolbar>
        </AppBar>
        <Box display='flex'>
          <Hidden mdDown>
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
          </Hidden>
          <Box p={2}>
            <Toolbar/>
            <Typography variant='h5' color='textPrimary' style={{ fontWeight: 600}}>Recomendados</Typography>
            <Grid container spacing={3}>
              {
                videos.map((item, index) => (
                  <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box>
                      <img src={item.thumb} alt={item.title} style={{width: '100%'}}/> 
                      <Box>
                        <Typography style={{ fontWeight: 600}} variant='body1' color='textPrimary'>{item.title}</Typography>
                        <Typography  variant='body2' color='textSecondary'>{item.channel}</Typography>
                        <Typography  variant='body2' color='textSecondary'>{`${item.views} | ${item.date}`}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))
              }
            </Grid>
            <Typography variant='h5' color='textPrimary' style={{ fontWeight: 600}}>Recomendados</Typography>
          </Box>
        </Box>
      </div>
    );
}

export default Home;