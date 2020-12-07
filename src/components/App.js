import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import SignInPage from './sign_in/SignInPage';
import ViewEmployeesPage from './users/admin/ViewEmployeesPage';
import DashboardPageAdmin from './dashboard/admin/DashboardPageAdmin';

export default function App()
{
  return ( <div className="App">
    <BrowserRouter>
      <Route exact path="/" render={(props) => <SignInPage/> } />
      <Route exact path="/admin/dashboard" render={(props) => <DashboardPageAdmin/> } />
      <Route exact path="/admin/viewemployees" render={(props) => <ViewEmployeesPage/> } />
    </BrowserRouter>
  </div> )
}