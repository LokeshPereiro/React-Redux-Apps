import { AppRouter } from "./router/AppRouter";
import { PokeProvider } from "./pokemons/context";
import { AuthProvider } from "./auth/context";
function App() {
  return (
    <>
      <AuthProvider>
        <PokeProvider>
          <AppRouter />
        </PokeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
