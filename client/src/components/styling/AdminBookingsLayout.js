import {React, useState} from 'react';
import { Paper, Grid, Container, Box } from '@material-ui/core';
import useStyles from './useStyles';

import CalendarSelector from '../userAdmin/bookings/CalendarSelector'
import ShowDesks from '../userAdmin/bookings/ShowDesks'

export default function AdminBookingsLayout(props) {

  const classes = useStyles();
  const [deskNum, setDeskNum] = useState(null)

  const [newBookingsModalOpen, setNewBookingsModalOpen] = useState(false);

  return(
    <Container maxWidth="lg" className={classes.container} id="bookings-container">
      <Grid container spacing={3}>

        {/* Calendar Day Selector */}
        <Grid item xs={12} md={8} lg={4}>
          <Paper className="admin-calendar">
            <CalendarSelector/>         
          </Paper>
        </Grid>

        {/* Desk Selector */}
        <Grid item xs={12} md={8} lg={4}>
          <Paper className="available-seats">
            <ShowDesks
            open={newBookingsModalOpen}
            setOpen={setNewBookingsModalOpen}
            deskNum={deskNum}
            setDeskNum={setDeskNum}/>
          </Paper>
        </Grid>

        {/* HERE IS THE BOTTOM BOX ON OUR PAGES */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>          
           BOTTOM BOX
          </Paper>
        </Grid>

      </Grid>
      <Box pt={4}>

      </Box>
    </Container>
  );
}