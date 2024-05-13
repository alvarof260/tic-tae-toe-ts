/* Types */
import { type Board } from "./types";

/* Primary */
import { useTheme } from "./hooks/useTheme";
import { useState } from "react";
import { TURNS } from "./constants";
import { getWinner, isFullBoard } from "./utils/board";
import "@fontsource-variable/inter";

/* Components */
import Header from "./layouts/Header";
import Layout from "./layouts/Layout";
import BoardComponent from "./components/Board";

function App() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [turn, setTurn] = useState<string>(TURNS.X);
  const [winner, setWinner] = useState<string | false | null>(null);
  const { handleTheme, theme } = useTheme();

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
        <BoardComponent board={board} updateBoard={updateBoard} />
        <article className="flex justify-center font-inter text-2xl pt-8 dark:text-azure-radiance-50 text-azure-radiance-950">{`It's ${turn} turn`}</article>
        {winner ? <span>Gano {winner} </span> : <span>empate</span>}
      </main>
    </Layout>
  );
}

export default App;
