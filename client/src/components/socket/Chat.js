import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function Chat({ socket }) {

    const location = useLocation();
    const { username } = location.state;
    
    const { room } = useParams();

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    
    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        })
    }, [socket]);

    console.log(messageList);
    return (
        <div>
            <div className="chatHeader"></div>
                <p>Live Chat</p>
            <div className="chatBody">
            {messageList.map((messageContent) => {
            return (
              <div className="message">
                <div>
                  <div>
                    <p>{messageContent.message}</p>
                  </div>
                  <div>
                    <p>{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
            </div>
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