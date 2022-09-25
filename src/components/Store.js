import React , { useContext } from 'react';

//Components
import Product from './shared/Product';

//Context
import { ProductsContext } from '../context/ProductContextProvider';

//style
import styles from './Store.module.css'

const Store = () => {

    const products = useContext(ProductsContext);

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center",
          marginTop: "150px",padding: "0 150px"}}>
            {
                products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;