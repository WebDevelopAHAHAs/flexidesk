/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react'
import {getUsers} from '../../../services/userServices'

import EditEmployee from './EditEmployee'
import DeleteEmployee from './DeleteEmployee'

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
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <th>0{user.contact_number}</th>  
        <td>{user.email}</td>
        <td>{user.access}</td>
        <td><EditEmployee data_id={user._id} access={user.access} first_name={user.first_name} last_name={user.last_name} contact_number={user.contact_number} email={user.email}/></td>
        <td><DeleteEmployee data_id={user._id} /></td>
      </tr>
    ))
  }

  return( <div className='row'>
    <div className='col-12'>

      <table className="employee-table"  id="employee-table-id">
          <thead>
              <tr>
                <th>First</th>
                <th>Last</th>
                <th>Contact</th>                
                <th>Email</th>
                <th>Access</th>
                <th></th>
                <th></th>
              </tr>
          </thead>
          
          <tbody>
            {loadTable()}
          </tbody>
      </table>
        
    </div>
  </div> )
}