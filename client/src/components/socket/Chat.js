import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function Chat({ socket }) {

    const location = useLocation();
    const { username } = location.state;

    const { room } = useParams();

    const [currentMessage, setCurrentMessage] = useState("");
    
    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage
            };

            console.log(messageData);
            await socket.emit("send_message", messageData);
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data);
        })
    }, [socket]);

    return (
        <div>
            <div className="chatHeader"></div>
                <p>Live Chat</p>
            <div className="chatBody"></div>
            <div className="chatFooter">
                <input 
                    type="text" 
                    placeholder="Type here" 
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }}    
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    )
}

export default Chat;