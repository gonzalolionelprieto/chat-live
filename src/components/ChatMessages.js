import React from "react";
import ScrollableContainer from "./ScrollableContainer";

function ChatMessages({ messages, userName }) {
  const currentUsername = userName;

  if (!messages || messages.length === 0) {
    return <p> 0 messages</p>;
  }

  return (
    <ScrollableContainer>
      <div className="w-4/5 max-w-lg h-96 overflow-y-auto mx-auto my-3">
        {Object.values(messages).map((messages, index) => (
          <div key={index} className="my-5 ">
            {currentUsername === messages.userName ? (
              <div className=" flex justify-end bg-wsp-green   rounded-l-md rounded-b-md rounded-tl-md mr-1 ml-3">
                <div className="flex  justify-between items-center w-full ">
                  <p className="text-start text-gray-100 font-small text-lg pl-2 break-all ">
                    {messages.message}
                  </p>
                  <div className="flex justify-end items-end h-full">
                    <p className="text-gray-100 font-small text-sm pt-5 pb-1 pr-2">
                      {messages.time}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" flex justify-start  bg-wsp-grey  rounded-r-lg rounded-b-md ml-1 mr-3">
                <div className="flex flex-col  justify-between items-center w-full ">
                  <div className="w-full flex justify-start p-0 m-0">
                    <p className="text-gray-100 font-small  text-xs p-0 m-0 pl-2">
                      {messages.userName}--
                    </p>
                  </div>
                  <div className="flex flex  justify-between items-center w-full  p-0 m-0">
                    <p className="text start text-gray-100 font-small text-lg pl-2">
                      {messages.message}
                    </p>
                    <p className="text-gray-300 font-small text-sm pt-5 pb-1 pr-2">
                      {messages.time}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </ScrollableContainer>
  );
}

export default ChatMessages;
