import { useContext, useState, useRef, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from 'react-router-dom';
import CartWidgetCard from "./CartWidgetCard";
import './CartWidget.scss';

const CartWidget = () => {

    const [cartItems] = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    let totalCartPrice = cartItems.reduce((acc, item) => acc + item.attributes.Price * item.count, 0);

    useEffect(() => {
        const handleClickOutside = event => { if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { setIsOpen(false); } };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [dropdownRef]);


    return ( 

        <>
            <span className="cart-widget">
                <Link to={"/cart"} className="header-icons__link"
                    onMouseEnter={() => setIsOpen(true)}
                >
                    <i className="fa-solid fa-cart-shopping cart-widget__icon"></i>
                    <span className="cart-widget__counter">{cartItems.length}</span>
                </Link>
            </span>
            
            {isOpen && (
                <div className="cart-widget--dropdown--wrapper">
                    <div ref={dropdownRef} className="cart-widget--dropdown">
                        <div className="cart-widget--dropdown__header">
                            <h3 className="cart-widget--dropdown__title">Cart <span>({cartItems.length} items)</span></h3>
                            <Link to={"/cart"} className="btn cart-widget__btn">Go to Cart</Link>
                        </div>
                        <div className="cart-widget--dropdown__body">
                            {cartItems.map(item => (
                                <CartWidgetCard 
                                    card={item} 
                                    key={item.id}                                     
                                />
                            ))}
                        </div>
                        <div className="cart-widget--dropdown__footer">
                            <span className="cart-widget--dropdown__total">Total: <span className="cart-widget--dropdown__total-price">£{totalCartPrice}.00</span></span>
                        </div>
                    </div>
                </div>
            )}

        </>
     );
}
 
export default CartWidget;
