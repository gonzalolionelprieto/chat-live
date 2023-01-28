import React, {useState,useEffect} from 'react';
import { getMessages, getUsers, initializeFirebase, sendMessage} from '../services/Firebase';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatUserList from './ChatUserList';



 function Chat() {
    const[messages,setMessages]=useState(["hola"]);
    const[users,setUsers]=useState([]);

useEffect(() => {
  initializeFirebase();
  getMessages((snapshot)=>{
    setMessages(snapshot.val());
  });
  getUsers((snapshot)=>{
    setUsers(snapshot.val());
  });
}, [])




const handleSendMessage = (text)=>{
    sendMessage(text);
}



  return (
    <div className='bg-white p-4 rounded-lg'>
        <ChatHeader users={users} />
    <div className="flex">
        <ChatUserList users={users}/>
        <ChatMessages messages={messages} />
    </div>
    <ChatInput onSend={handleSendMessage} />
    </div>
  );
}

export default Chat;