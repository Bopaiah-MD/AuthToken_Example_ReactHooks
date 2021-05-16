import React from 'react'
import {
    Link
  } from "react-router-dom";

function Logout() {
    localStorage.removeItem("token")
    return (
        <>
             <h1>You have been logged out!!!</h1>
             <Link to="/">Login Again</Link>  
       </>
     )
}

export default Logout
