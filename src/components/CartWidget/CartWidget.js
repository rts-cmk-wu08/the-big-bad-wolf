import { useContext, useState, useRef, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from 'react-router-dom';
import { IoCloseCircleOutline} from 'react-icons/io5';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './CartWidget.scss';

const CartWidget = () => {

    const [cartItems, setCartItems] = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const calculateTotalPrice = () => {
            const totalPrice = cartItems.reduce((acc, cartItem) => {
              return acc + cartItem.attributes.Price;
            }, 0);
            setTotalPrice(totalPrice);
        }; calculateTotalPrice();

        const handleClickOutside = event => { if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { setIsOpen(false); } };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [dropdownRef, cartItems]);

    const removeCard = (id) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== id ));
    };

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
                            {cartItems.map(card => (
                                <div className="card compProdWidgetCard cart-widget--dropdown__item" key={card.id}>
                                    <div className='card_compare compProdWidgetCard__compare'>
                                        <button className='card__compare-btn' onClick={() => {removeCard(card.id)}}>Remove <IoCloseCircleOutline className='icon-close'/></button>
                                    </div>
                                    <div className="compProdWidgetCard__inner" >
                                        <div className="compProdWidgetCard__img" >
                                            {Object.values(card.attributes?.Images).map((img, index) => ( 
                                                <LazyLoadImage effect="opacity" src={img[0].attributes.url} key={index} alt={''} />
                                            ))}
                                        </div>
                                        <div className="compProdWidgetCard__content">
                                            <h3 className='card__title'>{card.attributes.Name}</h3>
                                            <span className='card__price'><span>£</span>{card.attributes.Price}.00</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-widget--dropdown__footer">
                            <span className="cart-widget--dropdown__total">Total: <span className="cart-widget--dropdown__total-price">£{totalPrice}.00</span></span>
                        </div>
                    </div>
                </div>
            )}

        </>
     );
}
 
export default CartWidget;
