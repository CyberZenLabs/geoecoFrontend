import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [showCatalog, setShowCatalog] = useState(false);

  const [open, setOpen] = useState(false);
  const [pass, setPass] = useState(false);
  const [mail, setMail] = useState(false);
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
        pass,
        setPass,
        mail,
        setMail,
        modalData,
        setModalData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
