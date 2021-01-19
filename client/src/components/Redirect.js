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


export function Root(props){
  props.history.push('/login')
  return( <div>{props.login}</div> );
}


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

export async function AuthCheck(user, pageAccess, history) {
  console.log("Page - User Access: ", pageAccess, user.access)

  if(pageAccess !== user.access) {
    if(user.access === "admin") {
      history.push('/admin/dashboard');
      return( <div>{AdminDashboard}</div> );  
    }

    if(user.access === "employee") {
      history.push('/user/dashboard');
      return( <div>{UserDashboard}</div> );
    }
  }
}