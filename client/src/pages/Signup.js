import React, { useState } from "react";
import { createUser } from "../utils/API";
import Auth from "../utils/auth";

function Signup(){
    //state of form
    const [userFormData, setUserFormData] = useState({ username: "", email: "", password: ""});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await createUser(userFormData);

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const { token, user } = await response.json();
            console.log(user.username);
            Auth.login(token);
        } catch (err) {
            console.log(err);
        }

        setUserFormData({
            username: "",
            email: "",
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
                type={"text"} 
                className={"username"} 
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
                value={userFormData.email}
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
            <input type={"submit"} className={"submit-btn"} value={"Sign Up"} />
        </form>
        
    </div> 
)}

export default Signup;