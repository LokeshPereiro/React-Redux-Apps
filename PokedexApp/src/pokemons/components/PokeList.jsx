import { useContext } from "react";
import { PokeContext } from "../context";
import { Loader } from "./";
import { PokeCard } from "./";

export const PokeList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokeContext);
  // Si el length the del filtered pokemons es mayor a 0  entonces muestro mi arreglo filtrado sino allPokemons

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list-pokemon container">
          {filteredPokemons.length ? (
            <>
              {filteredPokemons.map((pokemon) => (
                <PokeCard pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map((pokemon) => (
                <PokeCard pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};
