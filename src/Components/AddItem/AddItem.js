import './styles.css';

function AddItem({ items, setItems }) {
  function agregar(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    const nombreTarea = document.getElementById("task").value;
    const tarea = { nombre: nombreTarea, estado: "no completado" };
    const newArray = items? [...items, tarea] : [tarea];  //Si items tiene objetos, 
    setItems(newArray);
  }

  return (
    <div className="AddItem">
      <header className="AddItem-header">
        <form id="form" onSubmit={agregar}>
          <label htmlFor="task">Nombre de la tarea</label><br/>
          <input type="text" id="task" />
          <input type="submit" name="Agregar tarea" />
        </form>
      </header>
    </div>
  );
}

export default AddItem;