import { pokeApiBaseURL } from "../../../api";
import { setPokemons, startLoadingPokemons } from "./pokeSlice";

export const getPokemonsApi = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // // La petición
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();

    const { data } = await pokeApiBaseURL.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    // console.log(resp.data);

    dispatch(setPokemons({ pokelist: data.results, nextPage: page + 1 }));
  };
};
