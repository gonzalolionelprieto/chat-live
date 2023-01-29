import React from "react";

function ChatUserList({ users }) {
  if (!users || !users.length) {
    return null;
  }

  return (
    <div className="w-1/4 h-64 overflow-y-scroll">
      {users.map((users, index) => (
        <div key={index} className="p-2 border-b">
          <p className="mx-auto">{users.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatUserList;
