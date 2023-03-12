import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context";
import { AuthRoutes } from "../auth/routes";
import { PokeRoutes } from "../pokemons/routes";

export const AppRouter = () => {
  const { loggedUser } = useContext(AuthContext);

  // const loggedUser = false;
  return (
    <Routes>
      {loggedUser ? (
        <Route path="/*" element={<PokeRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="auth/login" />} />
    </Routes>
  );
};
