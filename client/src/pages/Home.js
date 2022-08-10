import React from 'react';
import { Link } from "react-router-dom";
import { Navbar } from '../components';


function Home() {
    return (
        <>
            <Navbar />
            <div className='funButtonDiv'> 
                <Link className='linkToChat' to="/join">JOIN CHAT</Link>
            </div>
        </>
    )
}

export default Home;