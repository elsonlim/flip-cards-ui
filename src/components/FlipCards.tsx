import React, { useState, useEffect } from "react";
import { Japanese } from "../interface/card.interface";
import axiosInstance from "../utils/axios";
import FlipCard from "./FlipCard";

const FlipCards = () => {
  const [cards, setCards] = useState([] as Japanese[]);

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
    axiosInstance
      .get("/flipcards")
      .then(res => {
        setCards(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const renderCards = () =>
    cards.map(card => <FlipCard data={card} key={card.index} />);

  return <div data-testid="flip-cards">{renderCards()}</div>;
};

export default FlipCards;
