/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react'
import {getUsers} from '../../../services/userServices'

import EditEmployee from './EditEmployee'
import DeleteDialog from './DeleteEmployeeDialog'

export default function ViewEmployeesTable(props) {

  const [users, setUsers] = useState([])

  useEffect( () => {
    fetchData();
  }, [])

  async function fetchData() {
    const userData = await getUsers();
    setUsers(userData);
  }

  const loadTable = () => {
    console.log("Loading Employee Table: ", users)
 
    return users.map(user => (
      <tr key={user._id}>
        <td>{user.access}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <th>{user.contact_number}</th>  
        <td>{user.email}</td>
        <td><EditEmployee dataID={user._id} first_name={user.first_name} email={user.email}/></td>
        <td><DeleteDialog data_id={user._id} /></td>
      </tr>
    ))
  }

  return( <div className='row'>
    <div className='col-12'>

      <table className="employee-table"  id="employee-table-id">
          <thead>
              <tr>
                <th>Access</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact No.</th>                
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
          </thead>
          
          <tbody>
            {loadTable()}
          </tbody>
      </table>
        
    </div>
  </div> )
}