import React, { useState, useEffect } from "react";



import axios from "../apis/admin-rest";

// import useAxiosFetch from "./hooks/useAxiosFetch"
import useAxiosFunction from "../hooks/useAxiosFunction";



const AdminLogin = () => {

  //use state данные анкеты

  const [posts, error, loading, axiosFetch] = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "GET",
      url: "/posts"
    })
  }
  const handleSubmit = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "POST",
      url: "/product",
      requestConfig: {
        data: {
          name: 10,
          title: "Axios stuff"

        }
      }
    })
  }

 


  return (
    <div id="form-container">
      {/* <TextField id="outlined-basic" label="Surname" variant="outlined" />
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <Button onClick={handleSubmit}>Submit</Button> */}
    </div>
  );
};

export default AdminLogin;
