import React, { useState } from 'react'
import './Custom.css';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ username: "", password: "" });
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="loginform">
                <h2>LOGIN</h2>
                {(error !== "") ? (<div>{ error}</div>):""}
                <div className="inputfield">
                    <label htmlFor="username">Username: </label>
                    <input type="username" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value })} value={details.username}/>
                </div>
                <div className="submitform">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm;