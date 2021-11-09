import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8plS95nndhilpEWDYlkCTXRDgyTZFloM",
    authDomain: "e-clone-536f4.firebaseapp.com",
    projectId: "e-clone-536f4",
    storageBucket: "e-clone-536f4.appspot.com",
    messagingSenderId: "270993903287",
    appId: "1:270993903287:web:fe2f9f3d07ead0c3a08732",
    measurementId: "G-GJWETCPGV1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };