import { AppRouter } from "./router/AppRouter";
// import { LoginPage } from "./auth/pages/LoginPage";
import { PokeProvider } from "./pokemons/context";

function App() {
  return (
    <>
      <PokeProvider>
        <AppRouter />
      </PokeProvider>
    </>
  );
}

export default App;
