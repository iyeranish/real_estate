import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "efdaf9aa87msh8f695873c7b7609p1c1bc8jsn2ab8f2dc10c2",
    },
  });

  return data;
};
