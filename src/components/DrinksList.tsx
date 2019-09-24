import React from "react";
import DrinkCard from "./DrinkCard";
import Loader from './Loader'

import { Drink } from "../store/types";

import "./DrinksList.scss";

interface DrinkListProps {
  drinks: Drink[];
  isLoading: boolean;
}

const DrinkList: React.FC<DrinkListProps> = ({ drinks, isLoading,...props }) => {
  return (
    <div className="drink-list-container">
      {isLoading && drinks.length === 0 && <Loader />}
      {drinks.length > 0 && <ul className="drink-list">{drinks.map(DrinkCard)}</ul>}
    </div>
  );
};

export default DrinkList;
