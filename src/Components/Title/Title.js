import './styles.css';

function Title({texto}) {
    return (
      <div className="Title">
        <header className="Title-header">
          <p> {texto} </p>
        </header>
      </div>
    );
  }
  
  export default Title;
