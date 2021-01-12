import React from "react";
import SignInForm from './SignInForm'

export default function LoginPage({history})
{
  return(  
  <div className="page">

   
    <SignInForm history={history}/>
    

  </div> )
}