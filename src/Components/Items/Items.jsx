import "./styles.css";
import Item from "./Item/Item.jsx";

function Items({ items, setItems, mensaje, results }) {

  function borrarItem(index) {
    let arreglo = [...items] ;
    arreglo.splice(index, 1);
    setItems([...arreglo]);
  }

  function completarItem(index) {
    let arreglo = items;
    arreglo[index].estado = true;
    setItems([...arreglo]);
  }

  return (
    <div>
      <h2>{mensaje}</h2>
      <div className="Items row row-cols-1 row-cols-sm-2 g-3">
        {results.map(function (item, index) {
          return (
            <div key={index} className="col">
              <div className="cardContainer mx-auto my-2">
                {" "}
                {/* Añade la clase my-2 para un margen vertical de 0.5rem (equivalente a 1em) en la parte superior e inferior */}
                <Item
                  item={item}
                  index={index}
                  borrarItem={borrarItem}
                  completarItem={completarItem}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Items;
