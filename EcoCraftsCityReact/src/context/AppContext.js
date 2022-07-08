import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [showCatalog, setShowCatalog] = useState(false);

  const [open, setOpen] = useState(false);

  const [modalData, setModalData] = useState({
    title: "123",
    description: "123",
    inputs: [{ inputName: "123" }, { inputName: "123" }],
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
