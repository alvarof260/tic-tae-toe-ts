const ModalResult = ({
  winner,
  resetGame,
}: {
  winner: string | false | null;
  resetGame: () => void;
}) => {
  if (winner === null) return;
  const message = winner ? `Gano ${winner}` : "Empato";
  return (
    <section className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className=" bg-azure-radiance-400 p-6 rounded shadow-lg z-10 h-34 w-52 flex flex-col justify-center items-center gap-4">
        <h2 className="text-inter text-azure-radiance-950 text-xl text-center">
          {message}
        </h2>
        <footer>
          <button
            onClick={() => {
              resetGame();
            }}
            className=" bg-azure-radiance-800 w-44 h-10 text-azure-radiance-100 font-medium rounded-md text-xl"
          >
            play again
          </button>
        </footer>
      </div>
    </section>
  );
};

export default ModalResult;
