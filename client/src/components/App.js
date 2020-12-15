import React, {useReducer } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import stateReducer from '../config/stateReducer'
import {StateContext} from '../config/store'

//Styling & Layout
import {StylingTypography, Layout} from './styling/Layout'

//Partials
// import NavBar from './NavBar'

//Pages
import RegisterForm from './auth/RegisterForm'
import SignInPage from './sign_in/SignInPage'
import DashboardAdminPage from './dashboard/admin/DashboardAdminPage';


export default function App()
{
  const initialState = {
    loggedInUser: null
  }

  const [store, dispatch] = useReducer(stateReducer, initialState)

  return (
  <div className="App">

    <StateContext.Provider value={{store, dispatch}}>
      <BrowserRouter>
        <StylingTypography/>
        <Layout/>

        {/* Login */}
        <Route exact path="/signin"           component={SignInPage} />

        {/* Dashboard */}
        <Route exact path="/admin/dashboard"  component={DashboardAdminPage} />

        {/* Employees */}
        {/* <Route exact path="/admin/employees" render={(props) => <ViewEmployeesPage/> } /> */}
        {/* <Route exact path="/admin/employees/new" render={(props) => <NewEmployeeModal/> } /> */}

        {/* Desks */}

        {/* Bookings */}

        {/* Misc / Outliers */}
        <Route exact path="/auth/register"    component={RegisterForm} />

        {/* <NavBar/> */}
      </BrowserRouter>
    </StateContext.Provider>
    
  </div>
  )
}