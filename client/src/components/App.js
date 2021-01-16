import React, {useReducer } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
// import { useHistory } from "react-router-dom";
import stateReducer from '../config/stateReducer'
import {StateContext, useGlobalState} from '../config/store'

//Pages

import RootRedirect from './RootRedirect';
import LoginPage from './login/LoginPage'
// admin
import {Route as AdminDashboard} from  './admin/dashboard/AdminDashboardPage';
import {Route as AdminNewBookings} from   './admin/bookings/AdminNewBookingsPage';
import {Route as AdminViewBookings} from  './admin/bookings/AdminViewBookingsPage';
import {Route as AdminEmployees} from  './admin/employees/AdminEmployeesPage';
import {Route as AdminDesks} from  './admin/desks/AdminDesksPage';
// Users
import {Route as UserDashboard} from  './user/dashboard/UserDashboardPage';
import {Route as UserNewBookings} from   './user/bookings/UserNewBookingsPage';
import {Route as UserViewBookings} from  './user/bookings/UserViewBookingsPage';

export default function App()
{
  let initialState = { loggedInUser: null }

  // if(useGlobalState != null) {
  //   const {globalStore} = useGlobalState()
  //   initialState.loggedInUser = globalStore.loggedInUser
  // }

  const [store, dispatch] = useReducer(stateReducer, initialState)
  const {loggedInUser} = store

  return (
    
    <StateContext.Provider value={{store, dispatch}}>
      

      <BrowserRouter>
        
        {/* admin */}
        <Route exact path=  "/login"                component={LoginPage} />
        <Route exact path=  "/admin/dashboard"      component={AdminDashboard} />
        <Route exact path=  "/admin/newBookings"    component={AdminNewBookings} />
        <Route exact path=  "/admin/viewBookings"   component={AdminViewBookings} />
        <Route exact path=  "/admin/employees"      component={AdminEmployees} />
        <Route exact path=  "/admin/desks"          component={AdminDesks} />
        {/* user */}
        <Route exact path=  "/user/dashboard"      component={UserDashboard} />
        <Route exact path=  "/user/newBookings"    component={UserNewBookings} />
        <Route exact path=  "/user/viewBookings"   component={UserViewBookings} />
        {/* <Route exact path=  "/"                     component={RootRedirect} /> */}
        <Route exact path=  "/"                     component={RootRedirect} loggedIn={loggedInUser} login={LoginPage} dashboard={AdminDashboard} />
        {/* Desks */}
        
      </BrowserRouter>

      
    </StateContext.Provider>

   
  )
}