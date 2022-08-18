import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function Chats() {
    const location = useLocation();
    const url = location.pathname;
    const user_id = url.split("/").pop();
    console.log(user_id);
    
    const getAllChats = (chatData) => {
        return fetch(`/api/chats/${user_id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(chatData)
        });
    };
    
    const [chatData, setChatData] = useState({});
    
    useEffect(() => {

        const getUserChats = async () => {
            
            try {
                const response = await getAllChats();
                
                console.log(response);
                
                if(!response.ok) {
                    throw new Error('Cannot load chats')
                }
                
                const {allChats} = await response.json();
                
                console.log(allChats);
                setChatData(allChats);
            } catch (err) {
                console.error(err);
            }
        }
        
        getUserChats();
    });

    console.log(chatData);
    return (
        <div>
            <h2>
                
            </h2>
        </div>
    )
};

export default Chats;