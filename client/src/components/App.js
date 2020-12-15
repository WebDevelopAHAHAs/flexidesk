import React, {useReducer } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import stateReducer from '../config/stateReducer'
import {StateContext} from '../config/store'

//Pages
import LoginPage from './auth/LoginPage'
import DashboardAdminPage from './dashboard/DashboardAdminPage';
import EmployeesPage from './employees/EmployeesPage';
import {BookingsPage} from './bookings/BookingsPage'

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
  <div className="App">

    <StateContext.Provider value={{store, dispatch}}>
      <BrowserRouter>

        {/* Login */}
        <Route exact path="/login"               component={LoginPage} />

        {/* Dashboard */}
        <Route exact path="/admin/dashboard"      component={DashboardAdminPage} />

        {/* Employees */}
        <Route exact path="/admin/employees"      component={EmployeesPage} />

        <Route exact path="/admin/employees/new"  component={RegisterForm} /> {/* Temporary until modal implemented */}

        {/* Desks */}

        {/* Bookings */}
        
        <Route exact path="/admin/bookings"      component={BookingsPage} />

        {/* Misc / Outliers */}

      </BrowserRouter>
    </StateContext.Provider>
    
  </div>
  )
}