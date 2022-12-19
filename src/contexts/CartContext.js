import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {

    // Get the cart items from the local storage
    const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [cartItems, setCartItems] = useState([...initialCartItems]);    

    const updateCart = (item, action, amount, color) => {
        if (action === 'remove') {
            setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id ));
        } else if (action === 'add') {
            if (cartItems.find(cartItem => cartItem.id === item.id) === undefined) {
                setCartItems(prevArray => [...prevArray, {...item, count: amount ? amount : 1} ]);
            } else {
                setCartItems(prevArray => prevArray.map(cartItem => cartItem.id === item.id ? {...cartItem, count: cartItem.count + 1} : cartItem));
            } 
        }
    };

    const updateCartItem = (id, action, amount) => {
        if (action === 'minus' && cartItems.find(cartItem => cartItem.id === id).count > 1) {
            setCartItems(cartItems.map(cartItem => cartItem.id === id ? {...cartItem, count: cartItem.count - 1} : cartItem));
        } else if (action === 'plus' && cartItems.find(cartItem => cartItem.id === id).attributes.Stock === 'In stock') {
            setCartItems(cartItems.map(cartItem => cartItem.id === id ? {...cartItem, count: cartItem.count + 1} : cartItem));
        } else if (action === 'setTo') {
            setCartItems(cartItems.map(cartItem => cartItem.id === id ? {...cartItem, count: parseInt(amount)} : cartItem));
        }
    };

    // Save the cart items to the local storage every time it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    return (
        <CartContext.Provider value={[cartItems, setCartItems, updateCartItem, updateCart]}>
            {props.children}
        </CartContext.Provider>
    );
}