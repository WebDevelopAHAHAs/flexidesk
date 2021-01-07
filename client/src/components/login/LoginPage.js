import React from "react";
import SignInForm from './SignInForm'

export default function LoginPage({history})
{
  return(  
  <div class="page">

    <h1>Login</h1>
    <SignInForm history={history}/>
    

  </div> )
}