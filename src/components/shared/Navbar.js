import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../../context/CartContextProvider';

//icon
import shopIcon from '../../../src/asset/icons/shop.svg';

//Styles
import styles from "./Navbar.module.css"
const Navbar = () => {

    const {state} = useContext(CartContext);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} alt='cart'/></Link> 
                    <span>{state.itemCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;