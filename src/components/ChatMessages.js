import React from "react";

function ChatMessages({ messages }) {
 
  return (
    <div className="w-2/3 h-64 overflow-y-scroll">
      {Object.values(messages).map((messages, index) => (
        <div key={index} className="p-2 border-b  text-black">
          <p className=" bold  text-black">{messages.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;
