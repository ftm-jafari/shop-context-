import React , { useState , useEffect, createContext } from 'react';

//API
import { getProducts } from '../services/api';

export const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fechAPI = async () =>{
                setProducts(await getProducts());
        }
        fechAPI();
    }, []);


    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;