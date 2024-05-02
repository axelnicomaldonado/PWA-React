import style from "./styles.css";
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
    //El div no es necesario
    <div>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Buscar..."
        className="form-control"
        //Intenten hacer self-close cuando sea posible --> />
      ></input>
    </div>
  );
};

export default Search;
