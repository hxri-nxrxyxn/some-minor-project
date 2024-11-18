
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import {  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyD6eHCSykQa3uVthV0H9_9IQV6ombClRds",
    authDomain: "shopping-38cd8.firebaseapp.com",
    projectId: "shopping-38cd8",
    storageBucket: "shopping-38cd8.firebasestorage.app",
    messagingSenderId: "922355941309",
    appId: "1:922355941309:web:435261b925fceebafddcd4"
  };

  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth(app)

  const email = document.getElementById("email")
  const password = document.getElementById("password")
  const button = document.getElementById("button")
  
  
  const register = async (email,password) => {
      try {
          const user = await createUserWithEmailAndPassword(auth,email.value,password.value);
          console.log(user);
        } catch (error) {
            alert(error.code);  
        }
    }
    
    button.addEventListener("click",() => {register(email,password)});