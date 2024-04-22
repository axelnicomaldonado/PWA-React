import style from "./styles.css";
import { useEffect, useState } from "react";





const Search = ({ items, setSearchResults }) => {
  const [search, setSearch] = useState("")

  useEffect(() => {
    setSearchResults(items)
  }, [items, setSearchResults])

  //funcion de busqueda
  const searcher = (e) => {
    const searchTerm = e.target.value.toLowerCase()
    setSearch(searchTerm)
    setSearchResults(items.filter(item => item.nombre.toLowerCase().includes(searchTerm)))
  }

  return (
    <div>
      <input value={search} onChange={searcher} type="text" placeholder="Buscar..." className="form-control"></input>
    </div>
  )
}

export default Search;