import { AppRouter } from "./AppRouter";
import { PokeProvider } from "./context";

function App() {
  return (
    <PokeProvider>
      <AppRouter />
    </PokeProvider>
  );
}

export default App;
