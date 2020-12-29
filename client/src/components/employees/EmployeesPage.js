import React from "react";

//Styling
import StylingTypography from '../styling/StylingTypography'
import Layout from '../styling/Layout'

import NavBar from '../NavBar'

export default function EmployeesPage(props){
  console.log(props)
  return(
  <div page="employeesPage">
    
    <StylingTypography/>
    <Layout employees edit/>
      <h1>Employees</h1>
    <NavBar/>    

  </div>
  )
}