import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';

function App() {
   return (
    <div className="App">
      <NavBar />
      <Header />
      <Products greeting="Mi tienda de PC's" />
      <Footer />
    </div>
  );
}

export default App;
