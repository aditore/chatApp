import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components';
import { Join } from '../components/socket';


function JoinChat({ socket }) {
    const location = useLocation();
    const url = location.pathname;
    const id = url.split("/").pop();

    return (
        <>
            <Navbar id={id}/>
            <Join socket={socket} id={id} />
        </>
    )
}

export default JoinChat;