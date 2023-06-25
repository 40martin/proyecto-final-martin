import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDET_m2AHwhRfpcYgy-5Kf-78On-kKxxAY",
  authDomain: "proyecto-final-martin.firebaseapp.com",
  projectId: "proyecto-final-martin",
  storageBucket: "proyecto-final-martin.appspot.com",
  messagingSenderId: "386163753177",
  appId: "1:386163753177:web:7bda70e2a4ddcc6210bec8"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


