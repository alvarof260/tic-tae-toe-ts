import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="bg-azure-radiance-100 dark:bg-azure-radiance-950 h-screen">
    {children}
  </div>
);

export default Layout;
