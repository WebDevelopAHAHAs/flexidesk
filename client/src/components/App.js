import React, {useReducer } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import stateReducer from '../config/stateReducer'
import {StateContext} from '../config/store'

//Pages
import LoginPage from           '../containers/login/LoginPage'
import AdminDashboardPage from  '../containers/admin/AdminDashboardPage';
import AdminEmployeesPage from  '../containers/admin/AdminEmployeesPage';
import AdminBookingsPage from   '../containers/admin/AdminBookingsPage';

//Forms
import RegisterForm from './employees/RegisterForm'

export default function App()
{
  const initialState = {
    loggedInUser: null
  }

  const [store, dispatch] = useReducer(stateReducer, initialState)
  // const {loggedInUser} = store

  return (
    <StateContext.Provider value={{store, dispatch}}>
      <BrowserRouter>

        {/* Login */}
        <Route exact path="/login"                component={LoginPage} />

        {/* Dashboard */}
        <Route exact path="/admin/dashboard"      component={AdminDashboardPage} />

        {/* Employees */}
        <Route exact path="/admin/employees"      component={AdminEmployeesPage} />

        <Route exact path="/admin/employees/new"  component={RegisterForm} /> {/* Temporary until modal implemented */}

        {/* Desks */}

        {/* Bookings */}
        
        <Route exact path="/admin/bookings"      component={AdminBookingsPage} />

        {/* Misc / Outliers */}

      </BrowserRouter>
    </StateContext.Provider>
  )
}