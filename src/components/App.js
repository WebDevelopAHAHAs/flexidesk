import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import SignInPage from './sign_in/SignInPage';
import ViewEmployeesPage from './users/admin/ViewEmployeesPage';
import DashboardPageAdmin from './dashboard/admin/DashboardPageAdmin';
import NavBar from './NavBar'
import {StylingTypography, Layout} from './styling/Layout'

export default function App()
{
  return ( <div className="App">

    <BrowserRouter>
      <StylingTypography/>
      <Layout/>
      {/* <Route exact path="/" component={SignInPage} /> */}

        <Route exact path="/" render={(props) => <SignInPage/> } />
        <Route exact path="/admin/dashboard" render={(props) => <DashboardPageAdmin/> } />
        <Route exact path="/admin/viewemployees" render={(props) => <ViewEmployeesPage/> } />
        <NavBar/>
    </BrowserRouter>

  </div> )
}