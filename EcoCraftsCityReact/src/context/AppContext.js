import { createContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [showCatalog, setShowCatalog] = useState(false);

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [pass, setPass] = useState(false);
  const [mail, setMail] = useState(false);

  const [disable, setDisable] = useState(false);
  const [openRedact, setOpenRedact] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [Starttimer, setstarttimer] = useState(true);
  const [productList, setProductsLIst] = useState([]);

  const [modalData, setModalData] = useState({
    inputs: [],
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
        openRedact,
         setOpenRedact,
         openEmail,
         setOpenEmail,
         Starttimer,
         setstarttimer,
         openModal,
         setOpenModal,
         disable,
         setDisable,
          productList,
          setProductsLIst
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;