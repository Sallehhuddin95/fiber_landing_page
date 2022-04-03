import logo from "./logo.svg";
import Header from "./components/Header";
import FirstBody from "./components/FirstBody";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <section className="top-section">
        <Header />
        <FirstBody />
      </section>
    </div>
  );
}

export default App;
