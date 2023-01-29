import React, { useState, useEffect } from "react";
import {
  getMessages,
  initializeFirebase,
  sendMessage,
} from "../services/Firebase";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import ChatUserList from "./ChatUserList";

function Chat() {
  const [messages, setMessages] = useState(["hola"]);

  const [username, setUsername] = useState("");

  useEffect(() => {
    initializeFirebase();
    getMessages((snapshot) => {
      setMessages(snapshot.val());
    });
  }, []);

  const handleSendMessage = (text, userName, time) => {
    sendMessage(text, userName, time);
  };

  return (
    <div className=" flex flex-column  justify-center items-center">
      <div className="bg-wsp-black p-4 rounded-lg mx-auto h-full">
        <ChatHeader users={4} username={username} setUsername={setUsername} />
        <div className="flex flex-col ">
          <ChatUserList users={4} />
          <ChatMessages
            className="grow"
            messages={messages}
            userName={username}
          />
        </div>
        <ChatInput
          onSend={handleSendMessage}
          username={username}
          setUsername={setUsername}
        />
      </div>
    </div>
  );
}

export default Chat;
