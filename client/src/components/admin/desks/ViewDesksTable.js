import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import {getDesks} from '../../../services/deskServices'

import EditDesk from './EditDeskModal'

export default function ViewDesksTable(props) {

  useEffect( () => {
    fetchData();
  }, [])

  async function fetchData() {
    const deskData = await getDesks();
    console.log(deskData)
    const table = document.getElementById("desk-table-id");

    deskData.forEach( desk => {    
      var rowNode = document.createElement("tr");

      var number_cell = document.createElement("td");
      var number_text = document.createTextNode(desk.number);
      number_cell.appendChild(number_text);
      rowNode.appendChild(number_cell);

      var section_cell = document.createElement("td");
      var section_text = document.createTextNode(desk.section);
      section_cell.appendChild(section_text);
      rowNode.appendChild(section_cell);

      var available_cell = document.createElement("td");
      var available_text = document.createTextNode(desk.available);
      available_cell.appendChild(available_text);
      rowNode.appendChild(available_cell);

      var edit_cell = document.createElement("td");
      
      ReactDOM.render(
        <td><EditDesk userID={desk._id} number={desk.number} section={desk.section} email={desk.available}/></td>,
        edit_cell
      );

      rowNode.appendChild(edit_cell); 

      table.appendChild(rowNode);
    })
  }

  return( <div className='row'>
    <div className='col-12'>

      <table className="desk-table"  id="desk-table-id">
          <thead>
              <tr>
                <th>Desk No</th>
                <th>Desk Section</th>
                <th>Available</th>
                <th></th>
                <th></th>
              </tr>
          </thead>
          <tbody> </tbody>
      </table>

    </div>
  </div> )
}