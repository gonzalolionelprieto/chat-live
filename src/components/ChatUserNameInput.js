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

          <button className="bg-wsp-green text-white rounded-lg mx-2 p-2 px-3" onClick={() => setUsername(name)}>Ok</button>
        </div>
      ) : (
        <h4 className="text-gray-100 text-lg text-left ">{username}</h4>
      )}
    </>
  );
}
