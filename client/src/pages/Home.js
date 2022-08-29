import React from 'react';
import { useLocation } from 'react-router-dom';
import { Chats, Navbar } from '../components';


function Home() {
    const location = useLocation();
    const url = location.pathname;
    const id = url.split("/").pop();
    
    return (
        <>
            <Navbar id={id}/>
            <Chats id={id}/>
        </>
    )
}

export default Home;