import React from "react";
import {StylingTypography, Layout} from '../styling/Layout'
import NavBar from '../NavBar'

export default function EmployeesPage(props)
{
  console.log(props)
  return(
  <div page="employeesPage">
    
    <StylingTypography/>
    <Layout employees/>
      <h1>Employees</h1>
    <NavBar/>    

  </div>
  )
}

function AddEmployee(props) {
  return(
    <div>
      <h1>New Employee</h1>
    </div>
    
  )
}

export {AddEmployee};