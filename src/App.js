import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from './components/Products/ItemListContainer';

function App() {
   return (
    <div className="App">
      <Header />
      
      <ItemListContainer greeting="Mi tienda de PC's" />
      
      
      <Footer />
    </div>
  );
}

export default App;
