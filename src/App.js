import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Product from './components/Product/product';
import {  Route, Routes} from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Order/Order';
import OrderDetails from './components/Order/OrderDetails';
import CustomerRouters from './Routers/CustomerRouters';



function App() {
  return (
    <div className="z-500 ">
      
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
