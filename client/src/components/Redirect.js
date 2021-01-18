import {getLoggedOnUser} from '../services/authServices'

import LoginPage from  './login/LoginPage';
import {Route as AdminDashboard} from  './admin/dashboard/AdminDashboardPage';
import {Route as UserDashboard} from  './user/dashboard/UserDashboardPage';

export async function GetSessionUser() {
  const sessionUser = await getLoggedOnUser();
  if(sessionUser)
    return null;
  console.log("Session User: ", sessionUser)
  return sessionUser;  
}

// export function Root(props){
  // const user = GetSessionUser();
  // console.log("User Logged in: ", user)

  // if(user == null) {
  // foundUser(props)
  // props.history.push('/login')
  // return( <div>{LoginPage}</div> );
  // }
  // else
  // {
  //   return LoginSuccess(props)
    // props.history.push('/admin/dashboard');
    // return( <div>{props.dashboard}</div> );
  // }
// }

export function Root(props){
  props.history.push('/login')
  return( <div>{props.login}</div> );
}

// async function foundUser(props) {
//   try(
//     const user = await GetSessionUser();
//     console.log("User Logged in: ", user)
//     return LoginSuccess(props)
//   ).catch(
  
//     props.history.push('/login')
//     return( <div>{LoginPage}</div> );
//   })
// }

export function LoginSuccess(props) {
  const userAccess = GetSessionUser().access
  if(userAccess === "admin") {
    props.history.push('/admin/dashboard');
    return( <div>{AdminDashboard}</div> );  
  }

  if(userAccess === "employee") {
    props.history.push('/user/dashboard');
    return( <div>{UserDashboard}</div> );
  }
}

export function AuthCheck(props) {
  const userAccess = GetSessionUser().access;

  if(props.accessType !== userAccess) {
    if(userAccess === "admin") {
      props.history.push('/admin/dashboard');
      return( <div>{AdminDashboard}</div> );  
    }

    if(userAccess === "employee") {
      props.history.push('/user/dashboard');
      return( <div>{UserDashboard}</div> );
    }
  }
}