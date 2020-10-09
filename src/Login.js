import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login(){
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const login = (event) =>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            //logged in, redirect to homepage...
            history.push('/');
        })
        .catch((e) => alert(e.message));
    };

    const register = (event) =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            //create a user and logged in, redirect to homepage...
        })
        .catch((e) => alert(e.message));
    }

    return (
    <div className="login">
        <Link to="/">
             <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                className="login__logo"
                alt=""
             />
           </Link>
            <div className="login__container">
                <h1>Sign-in</h1>  
                <form>
                    <h5>E-mail</h5>
                    <input value = {email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value= {password} onChange={event => setPassword(event.target.value)} type="password" />
                </form>
                <button onClick={login} type="submit" className="login__signinButton">Sign In</button>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice and our Cookies Notice</p>
                <button onClick={register} type= "submit" className="login__registerButton">Create your Amazon account</button>
            </div>
    </div>
    );
}

export default Login;
