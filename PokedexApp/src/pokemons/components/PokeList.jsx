import { useContext } from "react";
import { PokeContext } from "../../context";
import { Loader } from "./";
import { PokeCard } from "./";

export const PokeList = () => {
  const { allPokemons, loading } = useContext(PokeContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list-pokemon container">
          {allPokemons?.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </>
  );
};
