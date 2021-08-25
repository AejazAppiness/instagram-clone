import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config ={ 
    apiKey: "AIzaSyAm25PW1K9Sjam-vKCh-eyP8DmZ2HPAdOE",
authDomain: "instagram-d46e3.firebaseapp.com",
projectId: "instagram-d46e3",
storageBucket: "instagram-d46e3.appspot.com",
messagingSenderId: "823172978005",
appId: "1:823172978005:web:9b1feca4692f4c570a4bdc"
}
 
const firebaseApp = firebase.initializeApp(config);

const {FieldValue} = firebase.firestore;

export {firebaseApp, FieldValue}