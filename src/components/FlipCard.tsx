import React from "react";
import { Japanese } from "../interface/card.interface";

interface FlipCardInterface {
  data: Japanese;
}

const FlipCard: React.SFC<FlipCardInterface> = ({ data }) => {
  return <div data-testid="flip-card">{data.index}</div>;
};

export default FlipCard;
