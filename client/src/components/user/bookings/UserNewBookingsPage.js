import React, {useEffect, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout'
import ViewFloorplan from './ViewFloorplan'
import CalendarSelector from './CalendarSelector'
import DeskSelector from './DeskSelector'
// import AddBooking from './AddBooking'
import './userBooking.css'

import {getUnbookedDesks} from '../../../services/deskServices'
import ConvertDate from '../../ConvertDate'

export function Route(props){
  return(<AppLayout access="employee" history={props.history} userNewBookings/>);
}

export function Layout(props) {
  // console.log("USER ID: ", props.user_id)
  const classes = useStyles();

  const [date, setDate] = useState(new Date())
  const [convertedDate, setConvertedDate] = useState(ConvertDate(date))
  const [desks, setDesks] = useState([])
  const [reloadDesks, setReloadDesks] = useState(true)

  useEffect( () => {
    fetchData();
  }, [date])

  async function fetchData() {
    // setReloadDesks(true)
    const deskData = await getUnbookedDesks(convertedDate);
    setDesks(deskData)
  }

  return(
  <div id="userBookings-page">    
    <MatUI.Container maxWidth="lg" className={classes.container} id="userBookings-container">
      <MatUI.Grid container spacing={3}>

        {/* Calendar Day Selector */}
        <MatUI.Grid item xs={12} md={12} lg={12}>
        <h1>New Booking</h1>
        <ViewFloorplan/><br></br>
          <MatUI.Paper className="user-calendar">

            <CalendarSelector date={date} setDate={setDate} setConvertedDate={setConvertedDate}/>

          </MatUI.Paper>
        </MatUI.Grid>

        {/* Desk Selector */}
        <MatUI.Grid item xs={12}>
          <MatUI.Paper className={classes.paper}>   

          <DeskSelector user_id={props.user_id}  reloadDesks={reloadDesks} setReloadDesks={setReloadDesks} desks={desks} date={convertedDate}/>
  
          </MatUI.Paper>
        </MatUI.Grid>

      </MatUI.Grid>
      <MatUI.Box pt={4}>

      </MatUI.Box>
    </MatUI.Container>
  </div>
  )
}