import React, { useState, useEffect } from "react";
import { Japanese } from "../interface/card.interface";
import axiosInstance from "../utils/axios";
import FlipCard from "./FlipCard";
import styles from "./FlipCardsGallery.module.css";
import { Store } from "../store";
import { connect } from "react-redux";

interface FlipCardsGalleryInterface {
  defaultSide?: boolean;
}

export const FlipCardsGallery: React.SFC<FlipCardsGalleryInterface> = ({
  defaultSide = true,
}) => {
  const [cards, setCards] = useState([] as Japanese[]);

  useEffect(() => {
    axiosInstance
      .get("/flipcards")
      .then(res => {
        setCards(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const renderCards = () =>
    cards.map(card => (
      <FlipCard
        data={card}
        key={card.index}
        isFrontFacingByDefault={defaultSide}
      />
    ));

  return (
    <div className={styles.flipcards} data-testid="flip-cards">
      {renderCards()}
    </div>
  );
};

const mapStateToProps = (store: Store) => {
  return {
    defaultSide: store.options.defaultSide,
  };
};
export default connect(mapStateToProps)(FlipCardsGallery);
