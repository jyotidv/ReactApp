import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './Custom.css';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

import Lists from './Lists';
import Card from './Card';

function Inital() {
    const adminUser = {
        username: "admin",
        password:"admin"
    }

    const [user, setUser] = useState({ username: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.username == adminUser.username && details.password == adminUser.password) {
            console.log("Logged In");
            setUser({
                username: details.username,
                password: details.password
            });
            
        } else {
            console.log("Details do not matched");
            setError("Details do not matched");
        }

    }
    const Logout = () => {
        console.log("Logout....");
        setUser({ username: "", password: "" });
    }

    return (

        <div className="container">
            {(user.username != "") ? (
                <div>

                    <h2>Welcome, <span>{user.username}</span></h2>
                    
                    <div className="left">
                        <button onClick={Logout}>Logout</button>
                        
                    </div>
                    <Lists />
                    
                </div>
            ) : (
                    <LoginForm Login={Login} error={ error}/>
            )}
        </div>
    );
}

export default Inital;