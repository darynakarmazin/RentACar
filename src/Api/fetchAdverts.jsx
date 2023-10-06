import axios from "axios";
axios.defaults.baseURL = "https://651fc0b1906e276284c373de.mockapi.io/api/v1/";

async function fetchAdverts() {
  try {
    const res = await axios.get("/adverts");
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchAdverts;
