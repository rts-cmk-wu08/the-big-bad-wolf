import { useContext, useState } from 'react';
import { useImmer } from 'use-immer';
import { CartContext } from "../../contexts/CartContext";
import { IoCloseCircleOutline } from 'react-icons/io5';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classnames from 'classnames';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "../ProductCard/ProductCard.scss";

const CartWidgetCard = ({card}) => {

    const [itemCount, setItemCount] = useImmer(1);
    const [itemTotalPrice, setItemTotalPrice] = useImmer(0);
    const { cartItems, setCartItem, updateCartItems, removeFromCart } = useContext(CartContext);

    const addItem = () => {
        updateCartItems(card.id);
    };

    const removeItem = () => {
        // if (itemCount > 1) {
        //     updateCartItems(cartItems - 1);
        // }
    };

    return (
        <div className="card cartWidgetCard">
            <div className='cartWidgetCard__remove'>
                <button className='cartWidgetCard__remove-btn' onClick={() => {removeFromCart(card.id)}}>Remove <IoCloseCircleOutline className='icon-close'/></button>
            </div>

            <div className="cartWidgetCard__inner" >
                <div className='cartWidgetCard__product'>
                    <div className="cartWidgetCard__img" >
                        <LazyLoadImage effect="opacity" src={card.img} alt={''} />
                     
                    </div>
                    <div className="cartWidgetCard__details">
                        <h3 className='cartWidgetCard__title'>{card.Name}</h3>
                        <span className="addtocart__stock">{card.Stock} <span className={classnames('inStock', { 'outOfStock': card.Stock === "Out of stock" })}></span></span>
                    </div>
                </div>
                
                <div className="cartWidgetCard__footer">
                    <div className='cartWidgetCard__counter'>
                        <div className="cart-amount cart-add__item">
                            <button className="cart-amount__btn-minus" onClick={removeItem}>
                                -
                            </button>
                            <input
                                className="cart-amount__input"
                                type="number"
                                name="amount"
                                value={itemCount}
                                readOnly
                            />
                            <button className="cart-amount__btn-plus" onClick={addItem}>
                                +
                            </button>
                        </div>
                    </div>
               
                    <span className='cartWidgetCard__price'><span>£</span>{itemTotalPrice}.00</span>
                </div>
            </div>
        </div>
    );
};

export default CartWidgetCard;