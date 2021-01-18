import {React, useEffect, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'
import 'react-calendar/dist/Calendar.css';
import ViewFloorplan from './ViewFloorplan'
import CalendarSelector from './CalendarSelector'
import DeskSelector from './DeskSelector'
// import AddBooking from './AddBooking'

import {getDesks, getUnbookedDesks} from '../../../services/deskServices'

import ConvertDate from '../../ConvertDate'

export function Route(props){
  return(<AppLayout history={props.history} newBookings/>);
}

export function Layout(props) {

  const classes = useStyles();

  const [date, setDate] = useState(new Date())
  const [convertedDate, setConvertedDate] = useState(ConvertDate(date))
  const [desks, setDesks] = useState([])

  useEffect( () => {
      fetchData();
  }, [date])

  async function fetchData() {
    const deskData = await getUnbookedDesks(convertedDate);
    setDesks(deskData)
  }

  return(
  <div id="adminBookings-page">    
    <MatUI.Container maxWidth="lg" className={classes.container} id="adminBookings-container">
      <MatUI.Grid container spacing={3}>

        {/* Calendar Day Selector */}
        <MatUI.Grid item xs={12} md={12} lg={12}>
        <h1 className='booking-h1'>New Booking</h1>
         <ViewFloorplan/>
        <br></br>
          <MatUI.Paper className="admin-calendar">

            <CalendarSelector date={date} setDate={setDate} setConvertedDate={setConvertedDate}/>

          </MatUI.Paper>
        </MatUI.Grid>

        {/* Desk Selector */}
        <MatUI.Grid item xs={12}>
          <MatUI.Paper className={classes.paper}>   

          <DeskSelector desks={desks} date={convertedDate}/>

          </MatUI.Paper>
        </MatUI.Grid>

      </MatUI.Grid>
      <MatUI.Box pt={4}>

      </MatUI.Box>
    </MatUI.Container>
  </div>
  )
}