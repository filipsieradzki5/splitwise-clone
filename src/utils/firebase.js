import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };