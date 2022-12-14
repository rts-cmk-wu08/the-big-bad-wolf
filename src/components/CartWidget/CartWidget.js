import { useContext, useState, useRef, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from 'react-router-dom';
import CartWidgetCard from "./CartWidgetCard";
import './CartWidget.scss';

const CartWidget = () => {

    const [cartItems] = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    let totalCartPrice = cartItems !== [] ? cartItems.reduce((acc, item) => acc + item.attributes.Price * item.count, 0) : 0;

    useEffect(() => {
        const handleClickOutside = event => { 
            // check if the user has clicked the remove button
            if (['cartWidgetCard__remove-btn', 'card__btn', 'icon-close', 'cartWidgetCard__remove'].some(className => event.target.classList.contains(className))) {
                // do not close the dropdown menu if the user has clicked the remove button
                return;
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { 
                setIsOpen(false); 
            } };
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
                <div className="cart-widget--dropdown--wrapper container">
                    <div className="cart-widget--dropdown--inner alignfull">
                        <div className="cart-widget--dropdown--inner__container">
                            <div ref={dropdownRef} className="cart-widget--dropdown">
                                <div className="cart-widget--dropdown__header">
                                    <h3 className="cart-widget--dropdown__title">Cart <span>({cartItems.length} items)</span></h3>
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
                                    <div className="cart-widget--dropdown__total">Sub total: <span className="cart-widget--dropdown__total-price"><span>£</span>{totalCartPrice}.00</span></div>
                                    <div className="cart-widget--dropdown__btns">
                                        <Link to={"/cart"} className="btn cart-widget__btn">Go to Cart</Link>
                                        <Link to={"/payment"} className="btn cart-widget__btn">Go to Payment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
     );
}
 
export default CartWidget;
