import { type Board } from "../types";

import { COMBINATIONS_WINNER } from "../constants";

export const getWinner = (boardToCheck: Board) => {
    for (const comb of COMBINATIONS_WINNER) {
      const [a, b, c] = comb;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return { winner: boardToCheck[a], comb };
      }
    }
    return null;
  };

export const isFullBoard = (boardToCheck: Board) => {
    return boardToCheck.every((cell) => cell != null);
  };