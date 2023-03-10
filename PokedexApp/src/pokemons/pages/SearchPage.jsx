import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokeContext } from "../context";
import { PokeCard } from "../components";
import { Loader } from "../../ui";

export const SearchPage = () => {
  const location = useLocation();
  // console.log(location);

  const { loading, globalPokemons } = useContext(PokeContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state)
  );
  // console.log(filteredPokemons);

  return (
    <div className="container">
      <p className="p-search">
        We found <span>{filteredPokemons.length}</span> pokemons:
      </p>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list-pokemon container">
          {filteredPokemons.map((pokemon) => (
            <PokeCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      )}
    </div>
  );
};
