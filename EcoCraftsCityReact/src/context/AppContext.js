import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [showCatalog, setShowCatalog] = useState(false);
  return (
    <AppContext.Provider value={{ showCatalog, setShowCatalog}}>{children}</AppContext.Provider>
  );
}

export default AppContext;
