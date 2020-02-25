import React, { useState } from "react";
import "./App.module.css";
import Header from "./components/Header";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
}

export default App;
