import './styles.css';
import Title from '../../Components/Title/Title.js';
import AddItem from '../../Components/AddItem/AddItem.js';
import Items from '../../Components/Items/Items.js'
import Search from '../../Components/Search/Search.js'
import {useState} from 'react'

function Home() {

  const [items, setItems] = useState([])
  const [searchResults, setSearchResults] = useState(items)

  return (
    <div className="Home">

        <div className='tituloContainer'>
        <Title/>
        </div>

        <div className="row">
    <div className="col">
      <Search items={items} setSearchResults={setSearchResults} />
    </div>
    <div className="col">
      <AddItem items={items} setItems={setItems} />
    </div>
  </div>
        <div className='itemsContainer'>

       
        <Items items={searchResults} setItems={setItems} />

        </div>

    </div>
  );
}

export default Home;