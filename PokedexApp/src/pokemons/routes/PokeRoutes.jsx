import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PokemonPage, SearchPage } from "../pages";
import { NavOutlet } from "../components";

export const PokeRoutes = () => {
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
