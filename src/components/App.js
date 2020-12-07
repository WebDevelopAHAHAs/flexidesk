import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import SignInPage from './universal/SignInPage';


import EmployeesPage from './employee/EmployeesPage';
import DashboardPageAdmin from './dashboard/admin/DashboardPageAdmin'

export default function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Route to="/employees" render={(props) => <EmployeesPage/> } />
        <Route to="/admin/dashboard" render={(props) => <DashboardPageAdmin/> } />
      </BrowserRouter>
    </div>
  )
}