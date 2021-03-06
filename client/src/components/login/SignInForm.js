import React, {useState} from 'react'
import {useGlobalState} from '../../config/store'
import {loginUser} from '../../services/authServices'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://flexi-desks.com/">
        FlexiDesk
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/floorplan.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'right',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInForm = ({history}) => {
    const initialFormState = {
        email: "",
        password: ""
    }

    const classes = useStyles();

    //User Related
    const [userDetails,setUserDetails] = useState(initialFormState)
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
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    function handleSubmit(event) {
      event.preventDefault()
      // Attempt login on server
      loginUser(userDetails).then((response) => {
          console.log("User Retrieved:", response)
          // document.cookie(response)
          dispatch({
              type: "setLoggedInUser",
              data: userDetails
          })

          if(response.access === "admin")
            history.push("/admin/dashboard") //successful redirect
          else if (response.access === "employee")
            history.push("/user/dashboard")
          
      }).catch((error) => {
        console.log('error:', error)

        if (error.response && error.response.status === 401)
            setErrorMessage("Authentication failed. Please check your username and password.")
        else   
            setErrorMessage("There may be a problem with the server. Please try again after a few moments.")
    })
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src="/images/logo.jpg" alt="logo"></img>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form id="login-form"className={classes.form} noValidate onSubmit={handleSubmit}>
      {errorMessage && <p style={errorStyles}>{errorMessage}</p>}

            <TextField
              className="login-email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField className="login-pw" name="password" label="Password" onChange={handleChange}
              type="password" id="password" autoComplete="current-password"
              variant="outlined" margin="normal" required fullWidth/>
            <FormControlLabel label="Remember me"
              control={<Checkbox value="remember" color="primary" />}/>              

            <Button className={classes.submit} type="submit"
              fullWidth variant="contained" color="primary">
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignInForm;