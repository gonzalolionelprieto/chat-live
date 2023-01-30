import React, { useState } from "react";

function ChatInput({ onSend, username }) {
  const [text, setText] = useState("");


  


  const handleSubmit = (e) => {
    if (!username) {
      alert("Username null,please enter you username")
    }
    e.preventDefault();
    onSend(text, username);
    setText("");
  };



  return (
    <form className="flex  items-center mt-5">
      <input
        type="text"
        className="bg-wsp-black-500 p-2 border rounded-lg w-full  text-gray-100 "
        
        placeholder="Write your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="bg-wsp-green text-white rounded-lg mx-2 p-2 px-3"
        type="submit"
        onClick={handleSubmit}
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
