import './styles.css';

function Button({texto, onClick}) {
  return (
    <div className="Button">
      <header className="Button-header">
        <button onClick={onClick}>{texto}</button>
      </header>
    </div>
  );
}

export default Button;
