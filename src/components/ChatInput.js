import React, { useState } from "react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");
  


  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="p-2 border rounded-lg w-full"
        placeholder="Write your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      
    </form>
  );
}

export default ChatInput;
