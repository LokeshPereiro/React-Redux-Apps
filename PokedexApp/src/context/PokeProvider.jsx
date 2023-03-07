import { useEffect, useState } from "react";
import { useForm } from "../hook";
import { PokeContext } from "./";

export const PokeProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);

  const [loading, setLoading] = useState(true);
  // Para la parte del filtrado
  const [active, setActive] = useState(false);

  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const getAllPokemons = async (limit = 50) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    // En el results tengo mi arreglo con 50 pokemons
    // Pero solo me trae el nombre de pokemon y la url, es decir, no tengo la información completa para sí poder clasificarlos por categorías, mostrar la imagen, etc
    // console.log(data);

    // Voy a recorrer de nuevo el arreglo 'results' y dentro la url (que tiene la info completa)
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    // console.log(results);
    // setAllPokemons(results);

    // Los primeros 50 + otros 50 cuando presionemos el button de next
    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  // Llamamos a todos los pokemons para así poder filtarlos en la busqueda y en el checkbox
  const getGlobalPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setGlobalPokemons(results);
    setLoading(false);
  };

  const getPokemonByID = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  return (
    <PokeContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        getAllPokemons,
        getGlobalPokemons,
        getPokemonByID,
        active,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
