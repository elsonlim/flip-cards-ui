import React, { useState } from "react";
import "./App.module.css";
import Header from "./components/Header";
import FlipCardsGallery from "./components/FlipCardsGallery";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <FlipCardsGallery />
    </div>
  );
}

export default App;
