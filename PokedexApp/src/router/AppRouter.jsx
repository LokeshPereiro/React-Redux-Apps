import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes";
import { PokeRoutes } from "../pokemons/routes";

export const AppRouter = () => {
  const Authenticated = false;
  return (
    <Routes>
      {Authenticated ? (
        <Route path="/*" element={<PokeRoutes />} />
      ) : (
        <Route path="auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="auth/login" />} />
    </Routes>
  );
};
