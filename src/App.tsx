/* Types */

/* Primary */
import { useTheme } from "./hooks/useTheme";
import "@fontsource-variable/inter";

/* Components */
import Header from "./layouts/Header";
import Layout from "./layouts/Layout";

function App() {
  const board = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  const { handleTheme, theme } = useTheme();
  return (
    <Layout>
      <Header handleTheme={handleTheme} theme={theme} />
      <main className="grid place-content-center h-[90vh]">
        <article className="grid grid-cols-3 place-content-around gap-5 w-96 h-96 border-2 px-6 border-red-500 dark:border-blue-400">
          {board.map((mark, index) => (
            <button
              className=" bg-zinc-900 h-24 text-slate-300 font-inter font-bold text-md rounded-md border border-gray-400 shadow-sm"
              key={index}
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
