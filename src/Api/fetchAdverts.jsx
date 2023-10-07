import axios from "axios";
axios.defaults.baseURL = "https://651fc0b1906e276284c373de.mockapi.io/api/v1/";
const limit = 8;

async function fetchAdverts(page) {
  try {
    const res = await axios.get(`/adverts?limit=${limit}&page=${page}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchAdverts;
