import firebase  from 'firebase/compat/app';

import 'firebase/compat/database';

export const firebaseConfig = {
    apiKey: "AIzaSyDqvM7H0_8duiQwrRSqyhkzrEaBFSOq5Pk",
    authDomain: "chatlive-55c9f.firebaseapp.com",
    databaseURL: "https://chatlive-55c9f-default-rtdb.firebaseio.com",
    projectId: "chatlive-55c9f",
    storageBucket: "chatlive-55c9f.appspot.com",
    messagingSenderId: "654533681200",
    appId: "1:654533681200:web:196086c7f5392f3051cdf5",
    measurementId: "G-D73LPWPDTQ"
};

export const initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig);
};

export const getMessages = (callback) => {
  firebase
    .database()
    .ref("messages")
    .on('value', callback);
};

function formatTime(timestamp) {
  let date = new Date(timestamp);
  return date.toLocaleTimeString();
}


export const sendMessage = (text,userName) => {
  firebase
    .database()
    .ref('messages')
    .push({  
      userName: userName,
      message: text,
      timestamp:  Date.now(),
      time: formatTime(Date.now())  }
      );
};


