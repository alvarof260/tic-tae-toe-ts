import { type HandleTheme } from "../types";
import { type Theme } from "../types";

import "@fontsource-variable/inter";

import Moon from "../icons/Moon";
import Sun from "../icons/Sun";

const Header = ({
  handleTheme,
  theme,
}: {
  handleTheme: HandleTheme;
  theme: Theme;
}) => {
  return (
    <header className="flex justify-evenly items-center w-full h-16">
      <h1 className="font-inter font-bold text-4xl py-4 text-azure-radiance-950 dark:text-azure-radiance-50">
        TIC TAE TOE
      </h1>
      <button
        onClick={handleTheme}
        className=" dark:hover:bg-azure-radiance-800/20 hover:border-slate-500/20 
        h-12 w-12 rounded-md border border-transparent flex justify-center items-center 
        hover:bg-azure-radiance-400/20 transition-all duration-300 ease-in"
      >
        {theme == "dark" ? (
          <Sun styles="text-azure-radiance-50" />
        ) : (
          <Moon styles="text-azure-radiance-950" />
        )}
      </button>
    </header>
  );
};

export default Header;
