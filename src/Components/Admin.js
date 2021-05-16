import React, { useState, useEffect } from 'react'
import {
    Link, Redirect
} from "react-router-dom";

function Admin() {
    const [loggedIn, setloggedIn] = useState(true);
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (token === null) {
            setloggedIn(false);
        }
    }, [])

    
    useEffect(() => {
        if (loggedIn === false) {
            return <Redirect to="/" />

        }
    }, [loggedIn])

    return (
        <>
            <h1>This is the Admin Page only Auth can access</h1>
            <Link to="/logout">Logout</Link>
        </>
    )    
}
export default Admin
