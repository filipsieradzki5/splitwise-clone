import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCBUTWFTIYLW8Cqi_6mFShBKZfNxDIRfKY",
    authDomain: "splitwise-clone-a37a3.firebaseapp.com",
    databaseURL: "https://splitwise-clone-a37a3-default-rtdb.firebaseio.com",
    projectId: "splitwise-clone-a37a3",
    storageBucket: "splitwise-clone-a37a3.appspot.com",
    messagingSenderId: "290863214758",
    appId: "1:290863214758:web:0ccacd97301ba730d78467",
    measurementId: "G-QT0RB9Y8SL"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
 
export default database;