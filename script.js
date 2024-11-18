
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import {  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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
  if(location.href == "http://127.0.0.1:5500/loggedin.html" ){   
    const logoutbtn = document.getElementById("logout")
}else{
    const button = document.getElementById("button")
}
  onAuthStateChanged(auth, (user) => {
    if (user) {
        if(location.href != "http://127.0.0.1:5500/loggedin.html")
            location.href = "http://127.0.0.1:5500/loggedin.html" 
    } else {
        if((location.href != "http://127.0.0.1:5500/login.html") && (location.href != "http://127.0.0.1:5500/register.html"))
            location.href = "http://127.0.0.1:5500/login.html" 
    }
  });

  const logout = async () => {
    try { 
      await auth.signOut()
      console.log("User signed out successfully.");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const register = async (email,password) => {
      try {
          const user = await createUserWithEmailAndPassword(auth,email.value,password.value);
          console.log(user);
        } catch (error) {
            alert(error.code);  
        }
    }

    const login = async (email,password) => {
        try {
            const user = await signInWithEmailAndPassword(auth,email.value,password.value);
            console.log(user);
          } catch (error) {
              alert(error.code);  
          }
      }
    
if(location.href == "http://127.0.0.1:5500/loggedin.html" ){   
    logoutbtn.addEventListener("click",logout)
}else if(location.href == "http://127.0.0.1:5500/login.html"){
    button.addEventListener("click",() => {login(email,password)});
}
else{
    button.addEventListener("click",() => {register(email,password)});
}
