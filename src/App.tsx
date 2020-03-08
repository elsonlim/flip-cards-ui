import React, { useState } from "react";
import "./App.module.css";
import Header from "./components/Header";
import FlipCardsGallery from "./components/FlipCardsGallery";
import OptionBar from "./components/OptionBar";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Provider store={store}>
      <div className="App">
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <OptionBar />
        <FlipCardsGallery />
      </div>
    </Provider>
  );
}

export default App;
