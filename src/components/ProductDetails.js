import React , { useContext, useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';
import axios from 'axios';

//Context
import { ProductsContext } from '../context/ProductContextProvider';

//style
import styles from './ProductDetails.module.css'

const ProductDetails = (props) => {
    // const id = props.match.params.id;
    // const {id} = useParams();
    const params = useParams();
    const id = params.id;
    const [product , setProduct] = useState({});
    // const data = useContext(ProductsContext);
    // const product = data[id - 1];
    // const {image, title, description, price, category} = product;
   
 
    const getProduct = async() =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
         setProduct(response.data);
    }

    useEffect(() =>{
        getProduct();
    }, [])

    return (
        <div className={styles.container}>
            <img className={styles.image} src={product.image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.category}><span>Category: </span>{product.category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>${product.price}</span>
                    <Link to='/products'>Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;