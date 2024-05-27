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
      className="dark:bg-blue-700 h-28 dark:text-slate-200 
      font-inter font-bold text-7xl text-slate-50
      rounded-md border border-blue-300 bg-azure-radiance-700"
      key={index}
      onClick={() => updateBoard(index)}
    >
      {value}
    </button>
  );
};

export default Cell;
