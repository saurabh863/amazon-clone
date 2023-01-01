import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6rJU1EJyoIgtCi8Br51urWDrEM86G0Ac",
    authDomain: "clone-8fd83.firebaseapp.com",
    projectId: "clone-8fd83",
    storageBucket: "clone-8fd83.appspot.com",
    messagingSenderId: "401676016235",
    appId: "1:401676016235:web:b4404e5be83bf97dbe6f2e",
    measurementId: "G-1GL8XM1LVH"
})


const auth = firebase.auth();

export {auth};