import React from "react";
import ChatUserNameInput from "./ChatUserNameInput";

function ChatHeader({ username, setUsername }) {
  return (
    <div className="flex justify-center items-center p-2 border-b">
      <h1 className="text-gray-100 text-lg font-bold mx-4">Username :</h1>
      <ChatUserNameInput username={username} setUsername={setUsername} />
    </div>
  );
}
export default ChatHeader;
