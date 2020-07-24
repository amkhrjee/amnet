import firebase from 'firebase/firebase-app'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyCLPVBJyxwYNhole-ZIRhj5yU0HOANVhsY",
    authDomain: "amnet-42871.firebaseapp.com",
    databaseURL: "https://amnet-42871.firebaseio.com",
    projectId: "amnet-42871",
    storageBucket: "amnet-42871.appspot.com",
    messagingSenderId: "741920340609",
    appId: "1:741920340609:web:79ca1cf7f53ecdb82aeb80",
    measurementId: "G-SRH0EKSGLP"
  };

  
  firebase.initializeApp(firebaseConfig)
  

  export default firebase