import { BUTTONSTYLES } from "../styles";

import Button from "./Button";

const ModalResult = ({
  winner,
  resetGame,
}: {
  winner: string | false | null;
  resetGame: () => void;
}) => {
  if (winner === null) return;
  const message = winner ? `Winner ${winner}` : "End in a tie";
  return (
    <section className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div
        className=" bg-blue-700 p-6 rounded shadow-lg z-10 h-80 w-96 flex flex-col 
         justify-around items-center"
      >
        <h2 className="font-inter text-slate-100 text-3xl text-bold text-center">
          {message}
        </h2>
        <footer>
          <Button type={BUTTONSTYLES.primary} resetGame={() => resetGame()}>
            Play Again
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default ModalResult;
