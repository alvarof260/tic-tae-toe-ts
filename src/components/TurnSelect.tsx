import { clsx } from "clsx";
import { TURNS } from "../constants";

const TurnSelect = ({
  turn,
  winner,
}: {
  turn: string;
  winner: string | false | null;
}) => {
  return (
    <section className="w-60 h-28 flex">
      <article
        className={clsx(
          `w-1/2 h-full grid place-content-center text-8xl font-inter 
          dark:text-slate-100 text-slate-100 
          transition-all duration-300 ease-in border border-transparent`,
          {
            "bg-blue-900/50 border rounded-md": turn === TURNS.X && !winner,
            "bg-yellow-400 font-inter dark:text-slate-950 rounded-md":
              winner === TURNS.X,
          }
        )}
      >
        {TURNS.X}
      </article>
      <article
        className={clsx(
          `w-1/2 h-full grid place-content-center font-inter text-8xl
          text-slate-100 
          transition-all duration-300 ease-in border border-transparent`,
          {
            "bg-blue-900/50 border rounded-md": turn === TURNS.O && !winner,
            "bg-yellow-400 font-inter text-slate-950 rounded-md":
              winner === TURNS.O,
          }
        )}
      >
        {TURNS.O}
      </article>
    </section>
  );
};

export default TurnSelect;
