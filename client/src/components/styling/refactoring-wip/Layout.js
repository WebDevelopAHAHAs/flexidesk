import {React, useState} from 'react';
import clsx from 'clsx';
import Core, { Typography, Drawer, Paper, Grid, Divider, List,
  Badge, Toolbar, AppBar, CssBaseline, Container, Box } from '@material-ui/core';
import Icon, { ChevronLeft, Notifications, IconButton, Menu } from '@material-ui/icons';

import { Bookings, ShowDesk } from '../bookings/BookingsPage'
import '../layout.css';
import Navbar from '../NavBar'

import TransitionsModal from '../bookings/NewBookingAdminForm';

const drawerWidth = 240;

export function Layout(props)
{
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => { setOpen(true); };
  const handleDrawerClose = () => { setOpen(false); };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // modal content hooks defined at top level component - and passed as props to follow hook rules
  const [modalOpen, setModalOpen] = useState(false);
  const [deskNum, setDeskNum] = useState(null)

  return (
    <div className={classes.root}>

      <CssBaseline/>

      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>

        <Toolbar className={classes.toolbar}>

          {/* Menu */}
          <IconButton className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}>
            <Menu/>
          </IconButton>

          {/* Dashboard Title */}
          <Typography className={classes.title} component="h1" variant="h6" color="inherit" noWrap>
            Dashboard
          </Typography>
          
          {/* Notification Icon */}
          <IconButton color="inherit">
            <Badge badgeContent={1} color="secondary">
              <Notifications/>
              {/* HERE IS THE NOTIFICATIONS */}
            </Badge>
          </IconButton>

        </Toolbar>

      </AppBar>

      <Drawer
        variant="permanent"
        classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          {/* HERE IS WHERE WE WILL WRITE THE WELCOME NOTE TO THE USER */}
          <h2>Welcome Admin</h2>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft/>
          </IconButton>
        </div>
        <Divider />
          <List></List>
        <Divider/>
        
        <List>
          <h2 className="navbar-header">What would you like to do</h2>
          {/* Here is the NavBar */}
          <Navbar className="navbar-home"/>
        </List>
      </Drawer>
      <main className={classes.content}>

        <div className={classes.appBarSpacer} />

        {/*Page Container*/}
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
          
          if(props && props.bookings)
          {
            {/*Calendar*/}
            <Grid item xs={12} md={8} lg={4}>
              <Paper className="admin-calendar">
                <Bookings/>
              </Paper>
            </Grid>

            {/*Desks*/}
            <Grid item xs={12} md={8} lg={4}>
              <Paper className="available-seats">
              <h3>Available Desks</h3>
              <ShowDesk open={modalOpen} setOpen={setModalOpen} deskNum={deskNum} setDeskNum={setDeskNum}/>
              </Paper>
            </Grid>
          }
          
            {/*Footer*/} {/* HERE IS THE BOTTOM BOX ON OUR PAGES */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>                
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