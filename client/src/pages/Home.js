import React from 'react';
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className='funButtonDiv'> 
            <Link className='linkToChat' to="/join">JOIN CHAT</Link>
        </div>
    )
}

export default Home;