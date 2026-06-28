// App.js
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./MyFirstCode";  // import your Firebase setup

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login successful:", userCredential.user);
        alert("Welcome back, " + userCredential.user.email);
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        alert("Login failed: " + error.message);
      });
  };
return (
    <div>
      <h1>My First Website Challenge 🌍✨</h1>
      <form onSubmit={loginUser}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login 🔑</button>
      </form>
    </div>
  );
}

export default App;
