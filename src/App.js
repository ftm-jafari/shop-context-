import './App.css';
import { Route , Router , Navigate, Routes} from 'react-router-dom';

//Components
import Login from './components/validate/Login';
import SignUp from './components/validate/SignUp';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';


//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
     <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
           <Route path='/login'        element={<Login/>} />
           <Route path='/signup'       element={<SignUp/>} />
           <Route path='/products/:id' element={<ProductDetails/>} />
           <Route path='/products'     element={<Store/>} />
           <Route path='/cart'         element={<ShopCart/>} />
           <Route path='/*'             element={<Navigate to='products'/>} />
        </Routes>
      </CartContextProvider>
     </ProductContextProvider>
  );
}

export default App;
