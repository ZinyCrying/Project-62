 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyD22CNpz3XWOIA7txdM5xHOoy4AKfrYDwk",
  authDomain: "attendance-app-80a0f.firebaseapp.com",
  projectId: "attendance-app-80a0f",
  storageBucket: "attendance-app-80a0f.appspot.com",
  messagingSenderId: "225367756117",
  appId: "1:225367756117:web:156566295b9b97307033dc",
  measurementId: "G-Z5GJDYKE0X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.database();
 

  