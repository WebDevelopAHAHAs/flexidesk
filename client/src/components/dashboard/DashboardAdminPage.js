import React from "react";

//Styling
import StylingTypography from '../styling/StylingTypography'
import Layout from '../styling/Layout'

import NavBar from '../NavBar'

export default function DashboardAdminPage(props)
{
  return( <div page="dashboardAdmin">

    <StylingTypography/>
    <Layout/>

    <h1>Admin Dashboard</h1>

    <NavBar/> 

  </div> )
}