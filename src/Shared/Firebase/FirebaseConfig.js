import firebase from "firebase/app";
const auth = firebase.auth;
const functions = firebase.functions;


const firebaseConfig = {
    apiKey: "AIzaSyD0bnyABw7A31TG8FfhaF_e1fsQ-rVmrIQ",
    authDomain: "bt-rak.firebaseapp.com",
    databaseURL: "https://bt-rak.firebaseio.com",
    projectId: "bt-rak",
    storageBucket: "bt-rak.appspot.com",
    messagingSenderId: "1027541533283",
    appId: "1:1027541533283:web:403a84f9c5de785af8ae56"
};
firebase.initializeApp(firebaseConfig);

export default firebase;