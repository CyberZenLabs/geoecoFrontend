import React, { useState, useEffect } from "react";

import { Button, Input, InputLabel, TextField } from "@mui/material";

import axios from "../apis/admin-rest";

// import useAxiosFetch from "./hooks/useAxiosFetch"
import useAxiosFunction from "../hooks/useAxiosFunction";



const AdminLogin = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    lastName: "",
    email: ""
  });

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormValue((prevState) => {
    return {
      ...prevState,
      [name]: value,
    };
  });
};

const {name, lastName, email} = formValue

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
    url: "/posts",
    requestConfig: {
      data: {
        name: 10,
        title: "Axios stuff",
      }
    }
  })
}


return (
  <div id="form-container">
    <TextField id="outlined-basic" onChange={handleChange}
    name="lastName" type="text"
    value={lastName} label="Фамилия"
    variant="outlined" />



    <TextField id="outlined-basic" onChange={handleChange}
    name="name" type="text"
    value={name} label="Имя"
    variant="outlined" />


    <TextField
      id="outlined-basic"
      onChange={handleChange} 
      name="email"
      value={email}
      label="Электронная Почта"
      variant="outlined" />

    <Button>Submit</Button>
  </div>
);
};

export default AdminLogin;