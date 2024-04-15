import './styles.css';
import Title from '../../Components/Title/Title.js';
import AddItem from '../../Components/AddItem/AddItem.js';
import Items from '../../Components/Items/Items.js'
import {useState} from 'react'

function Home() {

  let arregloDePrueba = [{nombre: 'tarea1', estado: "no completado"}, {nombre: 'tarea2', estado: "completado"}]

  const [items, setItems] = useState(arregloDePrueba)

    return (
      <div className="Home">
        <header className="Home-header">
          <Title/>
          <AddItem setItems={setItems}/>
          <Items items={items} setItems={setItems}/>
        </header>
      </div>
    );
  }
  
  export default Home;