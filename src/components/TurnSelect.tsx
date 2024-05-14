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
    <section className=" bg-azure-radiance-700 w-60 h-28 flex rounded-md shadow-md">
      <span
        className={clsx(
          "w-1/2 h-full grid place-content-center text-4xl transition-all duration-300 ease-in border border-transparent",
          {
            "bg-azure-radiance-900/50 border rounded-md border-slate-200/20":
              turn === TURNS.X && !winner,
            "bg-yellow-400 rounded-md": winner === TURNS.X,
          }
        )}
      >
        {TURNS.X}
      </span>
      <span
        className={clsx(
          "w-1/2 h-full grid place-content-center text-4xl transition-all duration-300 ease-in border border-transparent",
          {
            "bg-azure-radiance-900/50 border rounded-md border-slate-200/20":
              turn === TURNS.O && !winner,
            "bg-yellow-400 rounded-md": winner === TURNS.O,
          }
        )}
      >
        {TURNS.O}
      </span>
    </section>
  );
};

export default TurnSelect;
