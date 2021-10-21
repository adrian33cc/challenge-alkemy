import axios from "axios";

const URL_BASE = "https://superheroapi.com/api/278934590764424";

export const getHeroe = async () => {
  try {
    const response = await axios.get(`${URL_BASE}/1`);
    return response.data
    //return resolve;
  } catch (error) {
    console.error(error);
  }
};
