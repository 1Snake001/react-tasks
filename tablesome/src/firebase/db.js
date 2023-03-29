import firebase from 'firebase/app';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDII9rNaLvfa6Eg7bOYB7kt8cVDBXQ0jsQ",
    authDomain: "restaurant-lister.firebaseapp.com",
    projectId: "restaurant-lister",
    storageBucket: "restaurant-lister.appspot.com",
    messagingSenderId: "670847280951",
    appId: "1:670847280951:web:c9fd1dccfad03eff0f5cb2"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
