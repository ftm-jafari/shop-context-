import './App.css';
import { Route , Router , Navigate, Routes} from 'react-router-dom';

//Components
import Login from './components/Login';
import SignUp from './components/SignUp';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';


//Context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
     <ProductContextProvider>
      <Routes>
        <Route path='/login'        element={<Login/>} />
        <Route path='/signup'       element={<SignUp/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
        <Route path='/products'     element={<Store/>} />
        <Route path='/'             element={<Navigate to='products'/>} />
      </Routes>
     </ProductContextProvider>
  );
}

export default App;
