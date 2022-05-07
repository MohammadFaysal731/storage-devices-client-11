// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeKDmrghmeoYSwuGgaE8YCeR4yujjB0hs",
    authDomain: "storage-devices.firebaseapp.com",
    projectId: "storage-devices",
    storageBucket: "storage-devices.appspot.com",
    messagingSenderId: "783236507380",
    appId: "1:783236507380:web:c693d2a801d1f9b22620a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;