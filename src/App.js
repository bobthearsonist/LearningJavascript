import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
function App() {
  return (
    <main role="main" class="container">
      <NavBar />
      <Counters />
    </main>
  );
}

export default App;
