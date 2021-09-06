import firebase from 'firebase/app'
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDuThgqkBqRkK74hhfwVRZhoSxRSvU8UkM",
    authDomain: "template-9ab78.firebaseapp.com",
    projectId: "template-9ab78",
    storageBucket: "template-9ab78.appspot.com",
    messagingSenderId: "715587277696",
    appId: "1:715587277696:web:989b32148f18f395e5a765"
})

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}