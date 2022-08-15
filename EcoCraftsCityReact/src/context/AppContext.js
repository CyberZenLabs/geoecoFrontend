import { createContext, useState, useEffect } from 'react';
import axios from "../apis/admin-rest";
import hostName from "../tools/HostName";

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
  const [cartProductList, setCartProductList] = useState([]);
    const [shopsList, setShopsList] = useState([]);

  useEffect(() => {
      let temp = JSON.parse(localStorage.getItem('cartData'))
      if (temp) {
          setCartProductList(temp)
      }

  }, [localStorage.getItem('cartData')])

    useEffect(() => {

        axios
            .get(`${hostName.getHost()}/api/v1/store`)
            .then((res) => {
                // console.log(res);

                setShopsList(res.data.data.data)

            })
            .catch((err) => {
                // setiSLoading(false);
                console.error(err)
            });
    }, [])



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
          setProductsLIst,
          setCartProductList,
          cartProductList,
          shopsList,
          setShopsList
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;