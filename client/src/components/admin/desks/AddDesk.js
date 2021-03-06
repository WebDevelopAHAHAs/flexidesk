import {useState} from 'react'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

import ModalWrap from '../../ModalWrap'
import {createDesk} from '../../../services/deskServices'

export default function Wrapper(props) {
  return(<ModalWrap dataType="desk" formType="add" header="Add Desk"/>)
}

export function Button(props) {
  return (
  <button id="AddDesk" onClick={props.handleOpen}>
    <span>Add Desk</span>
  </button> )
}

export function Layout(props) {
  const classes = useStyles();
  const {dispatch} = useGlobalState()
  const [errorMessage, setErrorMessage] = useState(null)

  const initialFormState = {number: "", section: "", available: false}
  const [deskDetails, setDeskDetails] = useState(initialFormState);

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    if(name === "available")
      value = event.target.checked
    setDeskDetails({ ...deskDetails, [name]: value })
  }

  function handleSubmit(event) {
      event.preventDefault()
      createDesk(deskDetails).then(() => {
        dispatch({ type: "createDesk", data: deskDetails });
        props.handleClose(true);

      }).catch((error) => {
        if (error.response && error.response.status === 401)
          setErrorMessage("Creating a new desk failed. Please check you've only entered string values and filled in every one.")
        else   
          setErrorMessage(props.errorMessage)
    })
  }

  return(
  <MatUI.FormControl component="form" onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
    <MatUI.FormControl>
    <div className="container-spacing">
      <MatUI.FormLabel htmlFor="component-simple">Desk No</MatUI.FormLabel>
      <MatUI.Input id="standard-basic" name="number" required type="text" onChange={handleChange} />
      </div>
    </MatUI.FormControl>
    
    <MatUI.FormControl>
    <div className="container-spacing">
      <MatUI.FormLabel id="section" htmlFor="component-simple">Section</MatUI.FormLabel>
      <MatUI.Input id="standard-basic" name="section" required type="text" onChange={handleChange} />
      </div>
    </MatUI.FormControl>
    
    <MatUI.FormControl>
    <div className="available-container-spacing">
      <MatUI.FormLabel id="available" htmlFor="component-simple">Available</MatUI.FormLabel>
      <MatUI.Checkbox defaultValue={deskDetails.available} name="available" required type="checkbox" onChange={handleChange} />
      </div>
    </MatUI.FormControl>
    
    <MatUI.FormControl>
    <div className="button-wrapper">
      <button className='save-btn' variant="contained" type="submit" value="Register">Add Desk</button>
      </div>
    </MatUI.FormControl>
    
    <p> {errorMessage} </p>

  </MatUI.FormControl>
  )
}
