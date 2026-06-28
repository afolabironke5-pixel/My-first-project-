// App.js
import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBpZcHzA-cMgbsGUzbfA-LeK9BFYdtVum4",
  authDomain: "myfirstwebsitechallenge.firebaseapp.com",
  projectId: "myfirstwebsitechallenge",
  storageBucket:
"myfirstwebsitechallenge.firebasestorage.app",
  messagingSenderId: "496166912127",
  appId: "1:496166912127:web:23db90ad160aeb8ddeff4a",
  measurementId: "G-2T0YTVWQ81"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

function App() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      console.log(userCredential.user);
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };
const facts = [
    "Bananas are berries, but strawberries are not.",
    "Honey never spoils — archaeologists found edible honey in ancient tombs.",
    "Octopuses have three hearts.",
    "Sharks existed before trees.",
    "A day onVenus is longer than a year on Venus."
  ];

  const showFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    alert(facts[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌍 Random Fun Facts</h1>
      <div>
        <button onClick={showFact}>Show Fact</button>
      </div>
 <div style={{ marginTop: "20px" }}>
        <h2>🔑 Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>

      <p style={{ marginTop: "40px", fontStyle: "italic" }}>
        ✨ Created by Aderonke 🌸
      </p>
 </div>
  );
}
export default App;
