import React from "react";
import {StylingTypography, Layout} from '../styling/Layout'
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

function AddEmployee() {

  return(
    <div>
      <button> Add New Employee </button>
      
    </div>
    
  )
}

function EditEmployee(){
 
  return(
    <div>
       <button> Edit Employee </button>
    </div>
    
  )
}

export {AddEmployee, EditEmployee};