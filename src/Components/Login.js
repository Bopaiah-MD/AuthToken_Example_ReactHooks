import { useState , useMemo  } from 'react'
import {
    Redirect
} from "react-router-dom";
 

function Login() {
    const [loggedIn, setloggedIn] = useState(false);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const token = localStorage.getItem("token")

    useMemo(() => {
        if (token === null) {
            setloggedIn(false);
        }
        else {
            setloggedIn(true); 
        }
    }, [token])
    


    const onChangeCall = (e) => {
        setusername(e.target.value);
        setpassword(e.target.value);

    }

    const submitForm = (e) => {
        e.preventDefault();
        if (username === 'abc' && password === "abc") {
            localStorage.setItem("token","qwertyuiop");
            setloggedIn(true);
        }
        else {
            alert("username & passord incorrect, hint:type abc ")
        }
    }

    if (loggedIn === true) {
        return <Redirect to="/admin" />

    }

    let styles= {
        margin: 'auto',
        width: '50%',
     
        border: '5px solid #FFFF00',
        padding: '10px'
    }
  
    return (
        <div style={styles}>
            <p>Simple Login page With Token Auth using Local storge</p>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="username" name="username" value={username} onChange={onChangeCall} />
                <br />
                <input type="password" placeholder="password" name="password" value={password} onChange={onChangeCall} />
                <br />
                <input type="submit" />
                <br />
            </form>
        </div>
    )
}

export default Login
