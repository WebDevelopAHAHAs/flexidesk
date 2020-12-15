import React, {useState, useEffect} from "react";
import {StylingTypography, Layout} from '../styling/Layout'
import NavBar from '../NavBar'

export default function EmployeesPage(history)
{
  return(
  <div page="employeesPage">

    <StylingTypography/>
    {/* <Layout/> */}

      <h1>Employees</h1>

    <NavBar/>    

  </div>
  )
}