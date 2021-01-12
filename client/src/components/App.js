import React, {useReducer } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
// import { useHistory } from "react-router-dom";
import stateReducer from '../config/stateReducer'
import {StateContext} from '../config/store'

//Pages

import Redirect from   './Redirect';
import LoginPage from           './login/LoginPage'
import {Route as AdminBookings} from   './admin/bookings/AdminBookingsPage';
import {Route as AdminViewBookings} from  './admin/bookings/AdminViewBookingsPage';
import {Route as AdminDashboard} from  './admin/dashboard/AdminDashboardPage';
import {Route as AdminEmployees} from  './admin/employees/AdminEmployeesPage';
import {Route as AdminDesks} from  './admin/desks/AdminDesksPage';


export default function App()
{
  
  const initialState = {
    loggedInUser: null
  }

  const [store, dispatch] = useReducer(stateReducer, initialState)
  const {loggedInUser} = store

  // let history = useHistory();
  // console.log(history)


  return (
    
    <StateContext.Provider value={{store, dispatch}}>
      

      <BrowserRouter>
        
        
        <Route exact path=  "/login"                component={LoginPage} />
        <Route exact path=  "/admin/dashboard"      component={AdminDashboard} />
        <Route exact path=  "/admin/bookings"       component={AdminBookings} />
        <Route exact path=  "/admin/viewbookings"       component={AdminViewBookings} />
        <Route exact path=  "/admin/employees"      component={AdminEmployees} />
        <Route exact path=  "/admin/desks"      component={AdminDesks} />
        <Route exact path=  "/"                     component={Redirect} />
        <Route exact path=  "/"                     component={Redirect} login={LoginPage} dashboard={AdminDashboard} />
        {/* Desks */}
        
      </BrowserRouter>

      
    </StateContext.Provider>

   
  )
}