import React, { useState } from "react";
import "./App.module.css";
import Header from "./components/Header";
import FlipCards from "./components/FlipCards";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <FlipCards />
    </div>
  );
}

export default App;
