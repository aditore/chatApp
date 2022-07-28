import { Link } from "react-router-dom";

function Signup(){

return (
    <div style={{ position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'}} className="signupFormContainer">
        <h1 className="signupFormHeader">chatApp</h1>
        <form className="signupForm">
            <div className="iconPlaceholder"></div>
            <input type={"text"} className={"username"} required placeholder="Username"/>
            <br/>
            <div className="iconPlaceholder"></div>
            <input type={"password"} className={"password"} pattern={"[a-zA-Z0-9]{8,}"} required placeholder="Password"/>
            <br/>
            <input type={"submit"} className={"submit-btn"} value={"Sign Up"} />
        </form>
        <Link to="/startup">Link to CHAT</Link>
    </div> 
)}

export default Signup;