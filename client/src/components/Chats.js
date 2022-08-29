import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllChats } from "../utils/API"

function Chats({ id }) {
    
    const [chatData, setChatData] = useState([]);
    
    const chatDataCheck = Object.keys(chatData).length;

    useEffect(() => {

        const getUserChats = async () => {
            
            try {
                
                console.log(id);

                const response = await getAllChats(id);
                
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