import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const useAxiosFunction = (configObj) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

  const axiosFetch = async (configObj) => {
    const {
      axiosInstance,
      method,
      url,
      auth,
      requestFormDataConfig = new FormData(),
      requestConfig = {},
      formData,
    } = configObj;

    try {
      setLoading(true);
      setResponse([]);
      setError('');
      const ctrl = new AbortController();
      setController(ctrl);

      if (formData) {
        console.log(requestFormDataConfig);
        const res = await axiosInstance[method.toLowerCase()](url, {
          requestFormDataConfig,
          signal: ctrl.signal,
        });
        setResponse(res.data);
      } else {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: ctrl.signal,
        });
   
        setResponse(res.data);
      }
    } catch (error) {
      console.log('Hit');
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return [response, error, loading, axiosFetch];
};

export default useAxiosFunction;
