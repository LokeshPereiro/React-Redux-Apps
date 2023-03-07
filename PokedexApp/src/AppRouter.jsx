import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PokemonPage, SearchPage } from "./pokemons/pages";
import { NavOutlet } from "./pokemons/components";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavOutlet />}>
          <Route index element={<HomePage />} />
          <Route path="pokemon/:id" element={<PokemonPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
