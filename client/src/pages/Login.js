import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../utils/API";
import Auth from "../utils/auth";

function Login() {
    //state of form
    const [userFormData, setUserFormData] = useState({ username: "", password: "" });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await login(userFormData);
            
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const { token, userLogin } = await response.json();
            console.log(userLogin.username);
            Auth.login(token);
        } catch (err) {
            console.log(err);
        }

        setUserFormData({
            username: "",
            password: ""
        });
    };

    return (
        <div style={{ position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'}} className="signupFormContainer">
        <h1 className="signupFormHeader">chatApp</h1>
        <form className="signupForm" onSubmit={handleFormSubmit}>
            <div className="iconPlaceholder"></div>
            <input 
                type={"text"} 
                className={"username"} 
                placeholder="Username"
                name="username"
                onChange={handleInputChange}
                value={userFormData.username}
                required 
            />
            <br/>
            <div className="iconPlaceholder"></div>
            <input 
                type={"password"} 
                className={"password"} 
                pattern={"[a-zA-Z0-9]{8,}"} 
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
                value={userFormData.password}
                required 
            />
            <br/>
            <input type={"submit"} className={"submit-btn"} value={"Login"} />
        </form>
        <Link className="linkToLogin" to={`/`}>Click Here to Signup!</Link>
    </div> 
    )
};

export default Login;