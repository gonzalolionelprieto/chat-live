import React from "react";

export default function ChatUserNameInput({ username, setUsername }) {
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="bg-wsp-black-500 text-gray-100 p-2 border rounded-lg w-2/5 m-2"
        placeholder="Username..."
        value={username}
        onChange={handleUsernameChange}
      />
    </>
  );
}
