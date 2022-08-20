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
    
    const [chatData, setChatData] = useState([]);
    
    const chatDataCheck = Object.keys(chatData).length;

    useEffect(() => {

        const getUserChats = async () => {
            
            try {
                const response = await getAllChats();
                
                console.log(response);
                
                if(!response.ok) {
                    throw new Error('Cannot load chats')
                }
                
                const allChats = await response.json();
                
                console.log(allChats);
                let chatDataTitle = allChats.map((titles) => <li className="chatTitles" key={titles.id}>{titles.title}</li> )

                setChatData(chatDataTitle);

            } catch (err) {
                console.error(err);
            }
        }
        
        getUserChats();
    }, [chatDataCheck]);

    console.log(chatData);
    return (
        <div>
            <ul className="ulChatTitles">
                {chatData}
            </ul>
        </div>
    )
};

export default Chats;