import axios from "axios";
const BASE_URL = "http://radiant-river-29802.herokuapp.com";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
