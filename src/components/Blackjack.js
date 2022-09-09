import React, { useState } from "react";
import Card from "../services/Cards";
import Board from "./Board";

const Blackjack = () => {
  const cards = Card();
  let playerTurn = true;
  let dealerTurn = false;
  const [player, setPlayerCard] = useState([]);
  const [dealer, setDealerCard] = useState([]);
  const getCount = (user) => {

  }
  /**
   * 
   * @param {*} card Card that will be added to user array.
   */
  const addPlayerCard = (card) => {
    setPlayerCard(player.push(card));
  }
  /**
   * 
   * @param {*} card Card that will be added to dealer array.
   */
  const addDealerCard = (card) => {
    setDealerCard(dealer.push(card));
  }
  /**
   * Resets game state.
   */
  const reset = () => {
    setPlayerCard([]);
    setDealerCard([]);
    playerTurn = true;
    dealerTurn = false;
  }
  /**
   * Starts game.
   */
  const start = () => {
    console.log(player);
    addPlayerCard(cards.getCard());
    console.log(player);
    console.log(dealer);
    addDealerCard(cards.getCard());
    console.log(dealer);
  }

  return (
    <div id="blackjack">
      <button type="button" onClick={() => {
        reset();
      }}>Reset</button>
      <button type="button" onClick={() => {
        start();
      }}>Start</button>
      <Board playerCards={player} dealerCards={dealer}/>
    </div>
  );

}

export default Blackjack;