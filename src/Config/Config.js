import *as firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAIZufe716Ae-vQyzqTP_qguwGoaH51lzM",
    authDomain: "i-friend-you.firebaseapp.com",
    databaseURL: "https://i-friend-you.firebaseio.com",
    projectId: "i-friend-you",
    storageBucket: "gs://i-friend-you.appspot.com",
    messagingSenderId: "510355093518"
  };
  firebase.initializeApp(config);
  
  export default firebase