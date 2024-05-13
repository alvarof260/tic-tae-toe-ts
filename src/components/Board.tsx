import { type Board } from "../types";
import Cell from "./Cell";

const Board = ({
  board,
  updateBoard,
}: {
  board: Board;
  updateBoard: (index: number) => void;
}) => {
  return (
    <article className="grid grid-cols-3 place-content-around gap-8 w-[450px] h-[450px] px-6">
      {board.map((mark, index) => (
        <Cell updateBoard={updateBoard} index={index} value={mark} />
      ))}
    </article>
  );
};

export default Board;
