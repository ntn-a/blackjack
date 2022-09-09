import React from "react";
/**
 * 
 * @param {*} props Properties of Board
 * @returns Board for which the game will be rendered
 * on.
 */
const Board = (props) => {
  return (
    <div id="board">
      <div id="dealer">{props.dealerCards}</div>
      <div id="player">{props.playerCards}</div>
    </div>
  );
}

export default Board;