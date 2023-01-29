import React, { useState } from "react";

export default function ChatUserNameInput({ username, setUsername }) {
  const [name, setName] = useState();

  const handleUsernameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      {!username ? (
        <div>
          <input
            type="text"
            className="bg-wsp-black-500 text-gray-100 p-2 border rounded-lg w-2/5 m-2"
            placeholder="Username..."
            value={name}
            onChange={handleUsernameChange}
          />

          <button onClick={() => setUsername(name)}>Send</button>
        </div>
      ) : (
        <h4 className="text-gray-100 text-lg font-bold uppercase">{username}</h4>
      )}
    </>
  );
}
