// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
require('firebase/auth')
const firebaseConfig = {
    apiKey: "AIzaSyBTxPqDg3LaMRdeQ2Od4UwuHrhxn2y1lIw",
    authDomain: "slack-clone-e5722.firebaseapp.com",
    databaseURL: "https://slack-clone-e5722.firebaseio.com",
    projectId: "slack-clone-e5722",
    storageBucket: "slack-clone-e5722.appspot.com",
    messagingSenderId: "1048271135224",
    appId: "1:1048271135224:web:2d6bb75395a5999ecbb60d",
    measurementId: "G-7P2G42BG06"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  var  provider = new firebase.auth.GoogleAuthProvider();

  export {db , auth , provider};
  export default db ;