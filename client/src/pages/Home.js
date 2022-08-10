import React from 'react';
import { Navbar } from '../components';
import { Join } from '../components/socket';


function Home() {
    return (
        <>
            <Navbar />
            <Join />
        </>
    )
}

export default Home;