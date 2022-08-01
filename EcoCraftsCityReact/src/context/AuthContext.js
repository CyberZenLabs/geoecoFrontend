import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import useAxiosFunction from '../hooks/useAxiosFunction';
import { toast } from 'react-toastify';
const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [formValues, setFormValues] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    //Pull saved login state
  }, []);
  const login = () => {
    setLoggedIn(true);
    debugger;
  };
  const logout = () => {
    setLoggedIn(false);
    debugger;
  };
  const authContextValue = {
    login,
    loggedIn,
    logout,
  };
  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
