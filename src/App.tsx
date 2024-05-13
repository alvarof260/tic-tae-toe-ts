/* Types */
import { type Board } from "./types";

/* Primary */
import { useTheme } from "./hooks/useTheme";
import { useState } from "react";
import { TURNS, COMBINATIONS_WINNER } from "./constants";
import "@fontsource-variable/inter";

/* Components */
import Header from "./layouts/Header";
import Layout from "./layouts/Layout";

function App() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [turn, setTurn] = useState<string>(TURNS.X);
  const [winner, setWinner] = useState<string | false | null>(null);
  const { handleTheme, theme } = useTheme();

  const getWinner = (boardToCheck: Board) => {
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

  const isFullBoard = (boardToCheck: Board) => {
    return boardToCheck.every((cell) => cell != null);
  };

  const updateBoard = (index: number): void => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = getWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner.winner);
    } else if (isFullBoard(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <Layout>
      <Header handleTheme={handleTheme} theme={theme} />
      <main className="grid place-content-center h-[90vh]">
        <article className="grid grid-cols-3 place-content-around gap-8 w-[450px] h-[450px] px-6">
          {board.map((mark, index) => (
            <button
              className=" dark:bg-azure-radiance-600 h-28 dark:text-zinc-950 font-inter font-bold text-4xl rounded-md border-2 bg-azure-radiance-700 text-slate-50 border-slate-200/55 shadow-sm"
              key={index}
              onClick={() => updateBoard(index)}
            >
              {mark}
            </button>
          ))}
        </article>
        <article className="flex justify-center font-inter text-2xl pt-8 dark:text-azure-radiance-50 text-azure-radiance-950">{`It's ${turn} turn`}</article>
        {winner ? <span>Gano {winner} </span> : <span>empate</span>}
      </main>
    </Layout>
  );
}

export default App;
