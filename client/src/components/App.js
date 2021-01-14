import React, {useReducer } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
// import { useHistory } from "react-router-dom";
import stateReducer from '../config/stateReducer'
import {StateContext, useGlobalState} from '../config/store'

//Pages

import RootRedirect from './RootRedirect';
import LoginPage from './login/LoginPage'
import {Route as AdminDashboard} from  './admin/dashboard/AdminDashboardPage';

import {Route as AdminNewBookings} from   './admin/bookings/AdminNewBookingsPage';
import {Route as AdminViewBookings} from  './admin/bookings/AdminViewBookingsPage';
import {Route as AdminEmployees} from  './admin/employees/AdminEmployeesPage';
import {Route as AdminDesks} from  './admin/desks/AdminDesksPage';


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
        
        
        <Route exact path=  "/login"                component={LoginPage} />
        <Route exact path=  "/admin/dashboard"      component={AdminDashboard} />
        <Route exact path=  "/admin/newBookings"    component={AdminNewBookings} />
        <Route exact path=  "/admin/viewBookings"   component={AdminViewBookings} />
        <Route exact path=  "/admin/employees"      component={AdminEmployees} />
        <Route exact path=  "/admin/desks"          component={AdminDesks} />
        {/* <Route exact path=  "/"                     component={RootRedirect} /> */}
        <Route exact path=  "/"                     component={RootRedirect} loggedIn={loggedInUser} login={LoginPage} dashboard={AdminDashboard} />
        {/* Desks */}
        
      </BrowserRouter>

      
    </StateContext.Provider>

   
  )
}