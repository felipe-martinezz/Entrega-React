import './App.css';
import Footer from "./components/Footer";

function App() {
  let styleH1 = {
    color: "brown",
    textDecoration: "underline",
    marginTop: "100px",
  };

  let title = "E-Commerce React"

  return (
    <div className="App">
      <Footer />
      <header className="App-header">
      <h1 style={styleH1}>{title}</h1>
      </header>
    </div>
  );
}

export default App;
