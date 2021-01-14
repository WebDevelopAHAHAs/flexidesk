import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';

import {getDesks} from '../../../services/deskServices'
import EditDesk from './EditDesk'

export default function ViewDesksTable(props) {

  const [desks, setDesks] = useState([])

  useEffect( () => {
    fetchData();
  }, [])

  async function fetchData() {
    const deskData = await getDesks();
    setDesks(deskData);
  }

  const loadTable = () => {
    console.log("Loading Users Table: ", desks)
 
    return desks.map(desk => (
      <tr key={desk._id}>
        <td>{desk.number} </td>
        <td>{desk.section}</td>
        <td>{desk.available}</td>
        <td><EditDesk dataID={desk._id} number={desk.number} section={desk.section} email={desk.available}/></td>
        {/* <td><DeleteDialog/></td> */}
      </tr>
    ))
  }

  return(
  <div className='row'>
    <div className='col-12'>
      <table className="desk-table"  id="desk-table-id">
          <thead>
            <tr>
              <th>Desk Number</th>
              <th>Desk Section</th>
              <th>Available</th>
              <th>Edit</th>
              {/* <th>Delete</th> */}
            </tr>
          </thead>
          
          <tbody>
            {loadTable()}
          </tbody>
      </table>        
    </div>
  </div>
  )
}