import React, {useState} from 'react'
import { useHistory} from "react-router-dom"
import {createDesk} from '../../../services/deskServices'
import {useGlobalState} from '../../../config/store'
import * as MatUI from '@material-ui/core';
import useStyles from '../../styling/useStyles';

const AddNewDesk = (props) => {
  const initialFormState = {
    number: "",
    section: "",
    active: ""
  } 
  const handleClose = props.handleClose

  const classes = useStyles();

  //User Related
  const [deskDetails, setDeskDetails] = useState(initialFormState)
  const {dispatch} = useGlobalState()

  //Error Related
  const [errorMessage, setErrorMessage] = useState(null)

  //Compartmentalise
  const errorStyles = {
    color: "red"
  }

  function handleChange(event) {
      const name = event.target.name
      const value = event.target.value
      setDeskDetails({
          ...deskDetails,
          [name]: value
      })
  }


  function handleSubmit(event) {
      event.preventDefault()
      // Attempt register with server
      createDesk(deskDetails).then(() => {
          dispatch({
              type: "createDesk",
              data: deskDetails
          });
          handleClose();
          
      }).catch((error) => {
        if (error.response && error.response.status === 401)
            setErrorMessage("Registration failed. Please check you've only entered string values and filled in every one.")
        else   
            setErrorMessage("There may be a problem with the server. Please try again after a few moments.")
    })
    
  }


  return (

    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">

      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Desk Number</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="number"required type="number" onChange={handleChange} />
      </MatUI.FormControl>
      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Section</MatUI.FormLabel>
        <MatUI.Input id="standard-basic" name="section"required type="text" onChange={handleChange} />
      </MatUI.FormControl>
      <MatUI.FormControl>
        <MatUI.FormLabel htmlFor="component-simple">Available</MatUI.FormLabel>
        <MatUI.Radio id="standard-basic" name="available"required type="radio" onChange={handleChange} />
      </MatUI.FormControl>
      <MatUI.Button variant="contained" type="submit" value="New">Create Desk</MatUI.Button>
  </form>
  )
}
export default AddNewDesk