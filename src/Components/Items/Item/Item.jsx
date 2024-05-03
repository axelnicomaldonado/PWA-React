import "./styles.css";
import Button from "../../Button/Button.jsx";

function Item({ item, index, borrarItem, completarItem }) {
  let nombre = item.nombre;
  let estado = item.estado;
  let color;

  if(estado){
    color = 'success';
  } else {
    color = 'danger';
  }
  let divBootstrapBorder = "Item card border-" + color + " mb-3 bg-transparent d-flex flex-column justify-content-center align-items-center position-relative"
  let divBootstrapText = "card-body text-" + color

    return (
      <div className={divBootstrapBorder}>
        <div className={divBootstrapText}>
          <p className="card-text nombreTarea">{nombre}</p>
        </div>
        <div className="d-flex align-items-end botones">
        {!estado &&
          <div className="me-2">
            <Button
              className="completar"
              color="success"
              texto="Completar"
              onClick={() => completarItem(index)}
            />
          </div>
        }
          <div className="ms-auto">
            <Button
              color="danger"
              type="button"
              texto="Eliminar"
              onClick={() => borrarItem(index)}
              className="me-2 mt-1"
            />
          </div>
        </div>
      </div>
    );
}
export default Item;
