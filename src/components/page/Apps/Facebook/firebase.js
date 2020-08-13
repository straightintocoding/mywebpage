import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
	 apiKey: "AIzaSyBvbI-YNDlM9dYAV6kjAnRlQaYBnTezSPc",
    authDomain: "astral-root-254015.firebaseapp.com",
    databaseURL: "https://astral-root-254015.firebaseio.com",
    projectId: "astral-root-254015",
    storageBucket: "astral-root-254015.appspot.com",
    messagingSenderId: "556026518307",
    appId: "1:556026518307:web:0852a4002042c344c5ca96",
    measurementId: "G-9F5K60MDV2"

});
const db = firebaseApp.firestore();

export default db;