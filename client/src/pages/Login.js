import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../utils/API";
import Auth from "../utils/auth";

function Login() {
    //state of form
    const [userLFormData, setUserLFormData] = useState({ username: "", password: "" });
    const [userData, setUserData] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserLFormData({ ...userLFormData, [name]: value });
    };

    console.log(userData);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(userLFormData);

        try {
            const response = await login(userLFormData);
            console.log(response);
            if (!response.ok) {
                console.log(login(userLFormData));
                throw new Error("Something went wrong");
            }

            const { token, userLogin } = await response.json();
            console.log(userLogin.username);
            setUserData(userLogin);
            Auth.login(token, userLogin);
        } catch (err) {
            console.log(err);
        }
        setUserData({});
        setUserLFormData({
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
                value={userLFormData.username}
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
                value={userLFormData.password}
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