function Button({ color, texto, onClick }) {
  return (
    <div class="d-grid gap-2 d-md-block">
      <button className={"btn btn-" + color } type="button" onClick={onClick}>{texto}</button>
      </div>
  );
}

export default Button;
