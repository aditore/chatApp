import React from 'react';
import { Navbar } from '../components';
import { Join } from '../components/socket';


function JoinChat({ socket }) {
    return (
        <>
            <Navbar />
            <Join socket={socket}/>
        </>
    )
}

export default JoinChat;