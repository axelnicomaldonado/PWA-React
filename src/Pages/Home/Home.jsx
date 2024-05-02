import "./styles.css";
import Title from "../../Components/Title/Title.jsx";
import AddItem from "../../Components/AddItem/AddItem.jsx";
import Items from "../../Components/Items/Items.jsx";
import Search from "../../Components/Search/Search.jsx";
import { useState } from "react";

//Observaciones

//El codigo entregado no compila. Tuve que hacer cambios en los nombres de los import para poder ejecutar la app.
//Falta mostrar un mensaje cuando ya estan todas las tareas completadas.
//Title deberia recibir un texto a renderizar por props.
//El campo 'estado' en tarea deberia ser boolean!
//Hay archivos styles.css que estan vacios, no deberian existir.
//Borren siempre los console.logs() antes de hacer una entrega.
//Dentro de item tienen bastante codigo repetiro, deberian haber hecho un componente ahi para reutilizar ese codigo y no tenerlo dos veces.
//Los componentes y pages deberian tener el nombre de su archivo comenzando con mayuscula.
//Nombren los archivos que retornan un jxs, como home y los componentes como .jsx asi se entiende que son elementos de react.
//Intenten usar styles modules como vimos en clase para evitar tener problemas cuando la app crezca. Para esto nombre los archivos css de cada componente como nombreComponente.module.css
//Luego importa `import styles from './nombreComponente.module.css' y utilizan el objeto styles para incorporar el css a los className
//Podrian agregar algunas imagenes de como se ve la aplicacion corriendo al readme?
//Intenten instalar prettier o algun identador automatico para que el codigo quede mas ordenado y facil de leer.

function Home() {
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState(items);

  let texto = "To do list/React TP"

  return (
    <div className="Home">
      <div className="tituloContainer">
        <Title texto={texto}/>
      </div>

      <div className="row">
        <div className="col">
          <Search items={items} setSearchResults={setSearchResults} />
        </div>
        <div className="col">
          <AddItem items={items} setItems={setItems} />
        </div>
      </div>
      <div className="itemsContainer">
        <Items items={searchResults} setItems={setItems} />
      </div>
    </div>
  );
}

export default Home;
