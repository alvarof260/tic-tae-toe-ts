import { ButtonType } from "../types";

import { clsx } from "clsx";

const Button = ({ children, type, resetGame }: ButtonType) => {
  return (
    <button
      className={clsx(
        "text-md font-medium font-inter px-2 py-2 rounded-md",
        type
      )}
      onClick={() => resetGame()}
    >
      {children}
    </button>
  );
};

export default Button;
