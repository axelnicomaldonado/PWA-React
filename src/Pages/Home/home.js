import './styles.css';
import Title from '../../Components/Title/Title.js';
import AddItem from '../../Components/AddItem/AddItem.js';
import Items from '../../Components/Items/Items.js'
import Search from '../../Components/Search/Search.js'
import {useState} from 'react'

function Home() {
  const arregloDePrueba = [{ nombre: 'tarea1', estado: "no completado" }, { nombre: 'tarea2', estado: "completado" }]
  const [items, setItems] = useState(arregloDePrueba)
  const [searchResults, setSearchResults] = useState(items)

  return (
    <div className="Home">
      <header className="Home-header">
        <div className='tituloContainer'>
        <Title/>
        </div>

        <Search items={items} setSearchResults={setSearchResults} />
        <AddItem items={items} setItems={setItems} />
        <Items items={searchResults} setItems={setItems} />
      </header>
    </div>
  );
}

export default Home;