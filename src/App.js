import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';

function App() {
   return (
    <div className="App">
      <NavBar />
      <Header />
      
      <Products greeting="Mi tienda de PC's" />
      <ItemCount initial={1} stock={4} />
      <ItemCount initial={1} stock={5}/>
      <ItemCount initial={1} stock={6}/>
      
      <Footer />
    </div>
  );
}

export default App;
