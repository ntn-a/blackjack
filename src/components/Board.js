import React from "react";

const Board = (props) => {
  return (
    <div id="board">
      <div id="dealer">{props.dealerCards}</div>
      <div id="player">{props.userCards}</div>
    </div>
  );
}

export default Board;