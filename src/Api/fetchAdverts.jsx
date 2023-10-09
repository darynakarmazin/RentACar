import axios from "axios";
axios.defaults.baseURL = "https://651fc0b1906e276284c373de.mockapi.io/api/v1/";

export async function fetchAdverts(page) {
  try {
    const res = await axios.get("/adverts", {
      params: { page: page, limit: 8 },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAllAdverts() {
  try {
    const res = await axios.get("/adverts");
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
