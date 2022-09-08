import React, { useState } from "react";
import Card from "../services/Cards";
import Board from "./Board";

const Blackjack = () => {
  const playerTurn = true;
  const dealerTurn = false;
  const [player, setPlayerCard] = useState([]);
  const [dealer, setDealerCard] = useState([]);
  /**
   * 
   * @param {*} card Card that will be added to user array.
   */
  const addPlayerCard = (card) => {
    setPlayerCard(player.append(card));
  }
  /**
   * 
   * @param {*} card Card that will be added to dealer array.
   */
  const addDealerCard = (card) => {
    setDealerCard(dealer.append(card));
  }
  const cards = Card();

  return (
    <div id="blackjack">
      <Board/>
    </div>
  );
}

export default Blackjack;