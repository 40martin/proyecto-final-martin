import './App.css';
import Aplicacion from './components/Aplicacion';
import Carrousel from './components/Carrousel';
import CartWidget from './components/CartWidget';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Promociones from './components/Promociones';
import Eventos from './components/Eventos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import ItemDetail from './components/ItemDetail';
import Checkout from './components/Checkout';


function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Carrousel />
          <Routes>
            <Route path={"/"} element={<Aplicacion />} />
            <Route path={"/"} element={<Promociones />} />
          </Routes>
          <ItemListContainer greeting={"No se encontraron Productos"} />
          <Checkout />
          <Eventos />
          <ItemDetail />
          <CartWidget />
          <Cart />
          <NavBar />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
