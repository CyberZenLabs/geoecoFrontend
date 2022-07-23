import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [showCatalog, setShowCatalog] = useState(false);

  const [open, setOpen] = useState(false);
  
  const [openRedact, setOpenRedact] = useState(false);
  
  

  const [modalData, setModalData] = useState({
    inputs: [{ email: "Электронная почта" }],
    button: true,
  });
  return (
    <AppContext.Provider
      value={{
        showCatalog,
        setShowCatalog,
        open,
        setOpen,
        modalData,
        setModalData,
        openRedact,
         setOpenRedact,
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
