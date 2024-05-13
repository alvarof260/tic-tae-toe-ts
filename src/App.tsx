/* Types */
import { type Board } from "./types";

/* Primary */
import { useTheme } from "./hooks/useTheme";
import { useState } from "react";
import { TURNS } from "./constants";
import "@fontsource-variable/inter";

/* Components */
import Header from "./layouts/Header";
import Layout from "./layouts/Layout";

function App() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [turn, setTurn] = useState<string>(TURNS.X);
  const { handleTheme, theme } = useTheme();

  const updateBoard = (index: number): void => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
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
      </main>
    </Layout>
  );
}

export default App;
