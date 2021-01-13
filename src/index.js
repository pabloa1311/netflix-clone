import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {GlobalStyles} from "./global-styles"
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyDr1prye4PhUIssN0QUV8aw4VpA6okP5gQ",
    authDomain: "my-react-netflix-app.firebaseapp.com",
    projectId: "my-react-netflix-app",
    storageBucket: "my-react-netflix-app.appspot.com",
    messagingSenderId: "747259552237",
    appId: "1:747259552237:web:813149b5949b7f03f9c7e4",
    measurementId: "G-7KNF0GJF69"
  };

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>, 
    document.getElementById('root')
);

