import "./styles.css";
import Button from "../../Button/Button.jsx";

function Item({ item, index, borrarItem, completarItem }) {
  let nombre = item.nombre;
  let estado = item.estado;

  if (estado === true) {
    return (
      <div className="Item card border-success mb-3 bg-transparent d-flex flex-column justify-content-center align-items-center position-relative">
        <div className="card-body text-success">
          <p className="card-text nombreTarea">{nombre}</p>
        </div>

        <div className="d-flex align-items-start botones">
          <Button
            color="danger"
            type="button"
            texto="Eliminar"
            onClick={() => borrarItem(index)}
            className="mt-1"
          />
        </div>
      </div>
    );
  } else if (estado === false) {
    return (
      <div className="Item card border-danger mb-3 bg-transparent d-flex flex-column justify-content-center align-items-center position-relative">
        <div className="card-body text-danger">
          <p className="card-text nombreTarea">{nombre}</p>
        </div>
        <div className="d-flex align-items-end botones">
          <div className="me-2">
            <Button
              className="completar"
              color="success"
              texto="Completar"
              onClick={() => completarItem(index)}
            />
          </div>
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
  } else {
    return "error";
  }
}
//{estado === "no completado" && <Buton ....>}
export default Item;
