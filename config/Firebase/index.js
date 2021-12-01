// import firebase from 'firebase';
import firebase from '.';

const firebaseConfig = {
  apiKey: "AIzaSyDZc7i9eZVhBswb9ctbzwHsH3jJFMsrcDo",
  authDomain: "ptktp-a9358.firebaseapp.com",
  databaseURL: "https://ptktp-a9358-default-rtdb.firebaseio.com",
  projectId: "ptktp-a9358",
  storageBucket: "ptktp-a9358.appspot.com",
  messagingSenderId: "1082585482323",
  appId: "1:1082585482323:web:4fe769651d0ca5211c72a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
