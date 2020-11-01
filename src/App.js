import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";
function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <p>
          Open-source code on <a href="/">GitHub</a> and hosted on{" "}
          <a href="/">Netlify {""}</a>
          by <a href="/"> Pratibha Tomar</a>
        </p>
      </div>
    </div>
  );
}

export default App;
