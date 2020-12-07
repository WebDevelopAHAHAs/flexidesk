import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import SignInPage from './sign_in/SignInPage';
import ViewEmployeesPage from './users/admin/ViewEmployeesPage';
import DashboardPageAdmin from './dashboard/admin/DashboardPageAdmin';
import NavBar from './NavBar'

export default function App()
{
  return (
    <div className="App">
      <BrowserRouter>
      <Route to="/admin/dashboard" render={(props) => <DashboardPageAdmin/> } />
      <NavBar/>

        {/* <Route to="/" render={(props) => <SignInPage/> } /> */}

        {/* <Route to="/admin/employees" render={(props) => <ViewEmployeesPage/> } />         */}
      </BrowserRouter>
    </div>
  )
}