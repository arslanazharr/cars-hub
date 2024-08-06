/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SideBarContext = createContext(null);

export const SideBarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SideBarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};
