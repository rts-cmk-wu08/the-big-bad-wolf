import { createContext, useEffect } from 'react';
import { useImmer } from 'use-immer';

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [ cartItems, setCartItems ] = useImmer([
        {
            Id: 1,
            Name: 'Product 1',
            Price: 10,
            count: 3,
            img: 'https://images.unsplash.com/photo-1616484990928-8e1b5e2b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            Stock:  'In stock',
        }
    ]);

    
    console.log(cartItems, 'CartProvider');
    

    const updateCartItems = () => {};

    const addToCart = () => {
        console.log(cartItems, 'addToCart');
    };


    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== id ));
    };


    // Save the cart items to the local storage every time it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    return (
        <CartContext.Provider value={{cartItems, setCartItems, updateCartItems, removeFromCart, addToCart}}>
            {props.children}
        </CartContext.Provider>
    );
}