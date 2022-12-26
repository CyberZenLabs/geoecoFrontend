import axios from "axios";
const BASE_URL = "https://geoeco-t7js76po3a-uc.a.run.app";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
