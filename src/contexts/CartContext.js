import { createContext, useEffect } from 'react';
import { useImmer } from 'use-immer';

export const CartContext = createContext();

export const CartProvider = (props) => {

    // Get the cart items from the local storage
    const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [cartItems, setCartItems] = useImmer([...initialCartItems]);    

    const updateCartItems = (id, update) => {
        if (update === 'minus' && cartItems.find(cartItem => cartItem.id === id).count > 1) {
            setCartItems(cartItems.map(cartItem => cartItem.id === id ? {...cartItem, count: cartItem.count - 1} : cartItem));
        } else if (update === 'plus' && cartItems.find(cartItem => cartItem.id === id).attributes.Stock === 'In stock') {
            setCartItems(cartItems.map(cartItem => cartItem.id === id ? {...cartItem, count: cartItem.count + 1} : cartItem));
        }
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== id ));
    };

    // Save the cart items to the local storage every time it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    return (
        <CartContext.Provider value={[cartItems, setCartItems, updateCartItems, removeFromCart]}>
            {props.children}
        </CartContext.Provider>
    );
}