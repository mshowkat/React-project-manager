import { firebase } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFYayZxoJ-z_TxknHLMeSdWA7K2Hlhj9s",
    authDomain: "marioapp-957f8.firebaseapp.com",
    databaseURL: "https://marioapp-957f8.firebaseio.com",
    projectId: "marioapp-957f8",
    storageBucket: "",
    messagingSenderId: "619973053042",
    appId: "1:619973053042:web:a2cafc2e0faa0906"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase