import React from "react";

//Styling
import StylingTypography from '../../styling/StylingTypography'
import Layout from '../../styling/Layout'

import NavBar from '../../NavBar'

export default function AdminDashboardAdminPage(props)
{
  return( <div page="adminDashboard-page">

    <StylingTypography/>
    <Layout/>

    <h1>Admin Dashboard</h1>

    <NavBar/> 

  </div> )
}