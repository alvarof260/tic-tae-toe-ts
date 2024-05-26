import { ReactNode } from "react";

export type Theme = "dark" | "light";
export type HandleTheme = () => void;
export type Board = (string | null)[];
export interface ButtonType {
    children: ReactNode;
    type: string;
    resetGame: () => void
}
