import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import SignInPage from './universal/SignInPage';

import EmployeesPage from './admin/employees/EmployeesPage';

export default function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Route to="/" render={(props) => <SignInPage/> } />
        <Route to="/employees" render={(props) => <EmployeesPage/> } />
      </BrowserRouter>
    </div>
  )
}