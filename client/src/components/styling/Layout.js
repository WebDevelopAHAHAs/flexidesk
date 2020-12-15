import {React, useState} from 'react';
import './layout.css';
import Navbar from '../NavBar'
import { Bookings, ShowDesk } from '../bookings/BookingsPage'
import TransitionsModal from '../bookings/NewBookingAdminForm';

import clsx from 'clsx';

import { Typography, Link, Drawer, Paper, Grid, Divider, List,
  Badge, Toolbar, AppBar, CssBaseline, Container, Box } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export function StylingTypography() {
  return (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export function Layout(props) {
  console.log(props.booking)
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // modal content hooks defined at top level component - and passed as props to follow hook rules
  const [modalOpen, setModalOpen] = useState(false);
  const [deskNum, setDeskNum] = useState(null)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            {/* <Badge badgeContent={1} color="secondary"> */}
              {/* <NotificationsIcon /> */}
              {/* HERE IS THE NOTIFICATIONS */}
            {/* </Badge> */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), }} open={open}>
        <div className={classes.toolbarIcon}>
          {/* HERE IS WHERE WE WILL WRITE THE WELCOME NOTE TO THE USER */}
          <h2>Welcome Admin</h2>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider/>

        <List></List>

        <Divider/>

        <List>
          <h2 className="navbar-header">What would you like to do</h2>
          {/* Here is the NavBar */}
          <Navbar className="navbar-home"/>
        </List>
      </Drawer>
      <main className={classes.content}>

        <div className={classes.appBarSpacer}/>
        
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
          
            <Grid item xs={12} md={8} lg={4}>
              <Paper className="admin-calendar">
                {props && props.booking && <Bookings/>}
               
              </Paper>
            </Grid>
         
            <Grid item xs={12} md={8} lg={4}>
              <Paper className="available-seats">
              {props && props.showdesk &&  <ShowDesk open={modalOpen} setOpen={setModalOpen} deskNum={deskNum} setDeskNum={setDeskNum}/>}
              </Paper>
            </Grid>
          
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* HERE IS THE BOTTOM BOX ON OUR PAGES */}
               BOTTOM BOX
              </Paper>
            </Grid>

          </Grid>
          <Box pt={4}>
         
          </Box>
        </Container>
      </main>
    </div>
  );
}