import { useContext} from 'react';
import { CartContext } from "../../contexts/CartContext";
import { IoCloseCircleOutline, IoAdd, IoRemove } from 'react-icons/io5';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classnames from 'classnames';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "../ProductCard/ProductCard.scss";

const CartWidgetCard = ({card}) => {

    const [cartItems, setCartItems, updateCartItem, updateCart] = useContext(CartContext);
    
    let totalPrice = card.attributes.Price * card.count;

    return (
        <div className="card cartWidgetCard">
            <div className='cartWidgetCard__remove'>
                <button className='cartWidgetCard__remove-btn' onClick={() => {updateCart(card, 'remove')}}>Remove <IoCloseCircleOutline className='icon-close'/></button>
            </div>

            <div className="cartWidgetCard__inner" >
                <div className='cartWidgetCard__product'>
                    <div className="cartWidgetCard__img" >
                        <LazyLoadImage effect="opacity" src={card.attributes.Images.data[0].attributes.url} alt={''} />
                    </div>
                    <div className="cartWidgetCard__details">
                        <h3 className='cartWidgetCard__title'>{card.attributes.Name}</h3>
                        <span className="addtocart__stock">{card.attributes.Stock} <span className={classnames('inStock', { 'outOfStock': card.attributes.Stock === "Out of stock" })}></span></span>
                    </div>
                </div>
                
                <div className="cartWidgetCard__footer">
                    <div className='cartWidgetCard__counter'>
                        <div className="cart-amount cart-add__item">
                            <button className="cart-amount__btn" onClick={() => {updateCartItem(card.id, 'minus')}}><IoRemove className='icon-remove'/></button>
                            <input
                                className="cart-amount__input"
                                type="number"
                                name="amount"
                                value={card.count}
                                onChange={(event) => {
                                    const newCount = event.target.value;
                                    updateCartItem(card.id, 'setTo', newCount);
                                }}
                            />
                            <button className="cart-amount__btn" onClick={() => {updateCartItem(card.id, 'plus')}}><IoAdd className='icon-add'/></button>
                        </div>
                    </div>
               
                    <span className='cartWidgetCard__price'><span>£</span>{totalPrice}.00</span>
                </div>
            </div>
        </div>
    );
};

export default CartWidgetCard;