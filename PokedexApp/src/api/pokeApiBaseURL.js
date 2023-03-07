import axios from "axios";

export const pokeApiBaseURL = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
