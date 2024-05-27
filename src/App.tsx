/* Types */
import { type Board } from "./types";

/* Primary */
import { useTheme } from "./hooks/useTheme";
import { useState } from "react";
import { TURNS } from "./constants";
import { getWinner, isFullBoard } from "./utils/board";
import { BUTTONSTYLES } from "./styles";
import "@fontsource-variable/inter";

/* Components */
import Header from "./layouts/Header";
import Layout from "./layouts/Layout";
import BoardComponent from "./components/Board";
import TurnSelect from "./components/TurnSelect";
import ModalResult from "./components/ModalResult";
import Button from "./components/Button";

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
      <main className="flex flex-col justify-center items-center gap-8 h-[90vh]">
        <Button type={BUTTONSTYLES.primary} resetGame={resetGame}>
          Restart Game
        </Button>
        <BoardComponent board={board} updateBoard={updateBoard} />
        <TurnSelect turn={turn} winner={winner} />
        <ModalResult winner={winner} resetGame={resetGame} />
      </main>
    </Layout>
  );
}

export default App;
