import './styles.css';
import Item from './Item/Item.js';

function Items({items, setItems}) {

  function borrarItem(index){
    let arreglo = items
    arreglo.splice(index, 1)
    setItems([...arreglo])
    console.log(items)
  }

  function completarItem(index){
    let arreglo = items
    arreglo[index].estado = 'completado'
    setItems([...arreglo])
    console.log(items)
  }

    return (
      <div className="Items">
        <header className="Items-header">
          {items.map(function(item, index) {
            return (
            <Item item={item} index={index} borrarItem={borrarItem} completarItem={completarItem}/>)
          })}
        </header>
      </div>
    );
  }

export default Items;