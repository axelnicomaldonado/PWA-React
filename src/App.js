import Home from "./Pages/Home/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        ></link>
        <Home />
      </header>
    </div>
  );
}

export default App;
