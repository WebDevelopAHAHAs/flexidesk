import React, {useReducer } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import stateReducer from './config/stateReducer'
import {StateContext} from './config/store'

import RegisterForm from './components/auth/RegisterForm'
import SignInForm from './components/auth/SignInForm'

import DashboardAdminPage from './components/dashboard/admin/DashboardAdminPage';

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
        <Route exact path="/"               component={DashboardAdminPage} />
        <Route exact path="/auth/register"  component={RegisterForm} />
        <Route exact path="/auth/login"     component={SignInForm} />
        {/* <Route exact path="/admin/dashboard" render={(props) => <DashboardPageAdmin/> } /> */}
        {/* <Route exact path="/admin/employees" render={(props) => <ViewEmployeesPage/> } /> */}
        {/* <Route exact path="/admin/employees/new" render={(props) => <NewEmployeeModal/> } /> */}
      </BrowserRouter>
    </StateContext.Provider>
    
  </div>
  )
}