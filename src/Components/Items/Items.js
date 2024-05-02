import './styles.css';
import Item from './Item/Item.js';

function Items({items, setItems}) {

  function borrarItem(index){
    let arreglo = items
    arreglo.splice(index, 1)
    setItems([...arreglo])
  }

  function completarItem(index){
    let arreglo = items
    arreglo[index].estado = true
    setItems([...arreglo])
  }

    if(items.length == 0) {
      return (<h2>No hay tareas pendientes</h2>)
    } else return (
<div className="Items row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
  {items.map(function(item, index) {
    return (
      <div key={index} className="col">
        <div className='cardContainer mx-auto my-2'> {/* Añade la clase my-2 para un margen vertical de 0.5rem (equivalente a 1em) en la parte superior e inferior */}
          <Item item={item} index={index} borrarItem={borrarItem} completarItem={completarItem}/>
        </div>
      </div>
    );
  })}
</div>
    );
  }
export default Items;