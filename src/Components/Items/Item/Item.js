import './styles.css';
import Button from '../../Button/Button.js'

function Item({item, index, borrarItem, completarItem}) {

    let nombre = item.nombre
    let estado = item.estado

    if(estado === "completado"){
        return (
            <div className="ItemCompletado">
              <header className="Item-header">
                  <Button texto="X" onClick={() => borrarItem(index)}/>
                  <h3>{nombre}</h3>
              </header>
            </div>
          )
    } else if(estado === "no completado"){
        return (
            <div className="ItemNoCompletado">
              <header className="Item-header">
                <Button texto="X" onClick={() => borrarItem(index)}/>
                <h3>{nombre}</h3>
                <Button texto="completar" onClick={() => completarItem(index)}/>  
              </header>
            </div>
          )
    } else{
        return "error"
    }

    
  }

export default Item;