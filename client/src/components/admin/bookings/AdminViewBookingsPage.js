import {React, useState} from 'react';
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';
import AppLayout from '../../AppLayout';
import { useHistory } from "react-router-dom";
import CalendarSelector from './CalendarSelector'
import DeskSelector from './DeskSelector'
import EditBookingModal from './EditBookingModal'
import NewBookingModal from './AddNewBookingModal'


export function Route(props){
  return(<AppLayout viewbookings/>);
}

export function Layout(props) {

  const classes = useStyles();
  const [editBookingsModalOpen, setEditBookingsModalOpen] = useState(false);

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/admin/bookings`; 
    history.push(path);
  }


  return( <div id="adminBookings-page">
 

<MatUI.Container maxWidth="lg" className={classes.container} id="adminBookings-container">

  <MatUI.Grid container spacing={3}>
  
    <MatUI.Grid item xs={12} md={8} lg={4}>

     

    <h1>View Bookings</h1> <button id='NewBooking' onClick={routeChange}><span>New Booking</span></button>
        

      </MatUI.Grid>
      
      {/* HERE IS THE BOTTOM BOX ON OUR PAGES */}
      <MatUI.Grid item xs={12}>
        <MatUI.Paper className={classes.paper}>   

        <div className='row'>
            <div className='col-12'>
                <table className="bookings-table">
                    <thead>
                        <tr>
                            <th>Desk No</th>
                            <th>Employee</th>
                            <th>Date</th>
                            <th></th>
                           
                            
                        </tr>
                    </thead>
                    <tbody>
                      
                        <tr>
                           
                            <td>4</td>
                            <td>John Smith</td>
                            <td>14/1/2021</td>
                            <td>< EditBookingModal open={editBookingsModalOpen} setOpen={setEditBookingsModalOpen}>Edit Booking</ EditBookingModal></td>
                            
                          
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        </MatUI.Paper>
      </MatUI.Grid>

    </MatUI.Grid>
  <MatUI.Box pt={4}>
  </MatUI.Box>
</MatUI.Container>

</div>)
}