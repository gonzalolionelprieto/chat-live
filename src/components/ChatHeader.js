import React from "react";
import ChatUserNameInput from "./ChatUserNameInput";

function ChatHeader({ username, setUsername }) {
  return (
    <div className="flex justify-start items-center p-2 border-b">
      
      <ChatUserNameInput username={username} setUsername={setUsername} />
    </div>
  );
}
export default ChatHeader;
