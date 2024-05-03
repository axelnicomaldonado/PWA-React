import { useEffect, useState } from "react";

const Search = ({ items, setSearchResults }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearchResults(items);
  }, [items, setSearchResults]);

  //funcion de busqueda
  const searcher = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    setSearchResults(
      items.filter((item) => item.nombre.toLowerCase().includes(searchTerm))
    );
  };

  return (
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Buscar..."
        className="form-control"
        //Intenten hacer self-close cuando sea posible --> HACER SELF CLOSE (Boton para borrar busqueda creo) /> 
      ></input>
  );
};

export default Search;
