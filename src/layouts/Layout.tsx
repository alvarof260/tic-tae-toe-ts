import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className=" bg-slate-200 dark:bg-slate-900 h-screen">{children}</div>
);

export default Layout;
