import { createSlice } from "@reduxjs/toolkit";
export const pokeSlice = createSlice({
  name: "poke",
  initialState: {
    nextPage: 0,
    isLoading: false,
    pokelist: [],
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.nextPage = action.payload.nextPage;
      state.pokelist = action.payload.pokelist;
    },
  },
});
export const { startLoadingPokemons, setPokemons } = pokeSlice.actions;
