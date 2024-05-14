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
import TurnSelect from "./components/TurnSelect";

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

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <Layout>
      <Header handleTheme={handleTheme} theme={theme} />
      <main className="flex flex-col justify-center items-center gap-4 h-[90vh]">
        <button
          className=" bg-azure-radiance-700 h-10 px-3 rounded-md text-md text-azure-radiance-100 font-inter font-regular"
          onClick={resetGame}
        >
          Reset Game
        </button>
        <BoardComponent board={board} updateBoard={updateBoard} />
        <TurnSelect turn={turn} winner={winner} />
        {/* <button onClick={() => resetGame()}>RESET</button>
        <article className="flex justify-center font-inter text-2xl pt-8 dark:text-azure-radiance-50 text-azure-radiance-950">{`It's ${turn} turn`}</article>
        {winner ? <span>Gano {winner} </span> : <span>empate</span>} */}
      </main>
    </Layout>
  );
}

export default App;
