import './styles.css';
import Button from '../../Button/Button.js'

function Item({item, index, borrarItem, completarItem}) {

    let nombre = item.nombre
    let estado = item.estado

    if(estado === "completado"){
        return (
          <div className='Item'>
            <div className="ItemCompletado">
                  <Button texto="X" onClick={() => borrarItem(index)}/>
                  <h3>{nombre}</h3>
            </div>
          </div>
          )
    } else if(estado === "no completado"){
        return (
          <div className='Item'>
            <div className="ItemNoCompletado">
                <Button texto="X" onClick={() => borrarItem(index)}/>
                <h3>{nombre}</h3>
                <Button texto="completar" onClick={() => completarItem(index)}/>
            </div>
          </div>
          )
    } else{
        return "error"
    }

    
  }
//{estado === "no completado" && <Buton ....>}
export default Item;