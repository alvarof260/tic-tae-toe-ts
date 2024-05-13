const Cell = ({
  updateBoard,
  index,
  value,
}: {
  updateBoard: (index: number) => void;
  index: number;
  value: string | null;
}) => {
  return (
    <button
      className=" dark:bg-azure-radiance-600 h-28 dark:text-zinc-950 font-inter font-bold text-4xl rounded-md border-2 bg-azure-radiance-700 text-slate-50 border-slate-200/55 shadow-sm"
      key={index}
      onClick={() => updateBoard(index)}
    >
      {value}
    </button>
  );
};

export default Cell;
