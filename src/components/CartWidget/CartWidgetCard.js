import { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classnames from 'classnames';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "../ProductCard/ProductCard.scss";

const CartWidgetCard = ({card, removeCard}) => {

    const [itemCount, setItemCount] = useState(1);
    const itemPrice = card.attributes.Price;
    const itemTotalPrice = itemCount * itemPrice;

    const addItem = () => {
        setItemCount(itemCount + 1);
    };

    const removeItem = () => {
        setItemCount(itemCount > 1 ? itemCount - 1 : 1);
    };

    return (
        <div className="card cartWidgetCard">
            <div className='cartWidgetCard__remove'>
                <button className='cartWidgetCard__remove-btn' onClick={() => {removeCard(card.id)}}>Remove <IoCloseCircleOutline className='icon-close'/></button>
            </div>

            <div className="cartWidgetCard__inner" >
                <div className='cartWidgetCard__product'>
                    <div className="cartWidgetCard__img" >
                        {Object.values(card.attributes?.Images).map((img, index) => ( 
                            <LazyLoadImage effect="opacity" src={img[0].attributes.url} key={index} alt={''} />
                        ))}
                    </div>
                    <div className="cartWidgetCard__details">
                        <h3 className='cartWidgetCard__title'>{card.attributes.Name}</h3>
                        <span className="addtocart__stock">{card.attributes.Stock} <span className={classnames('inStock', { 'outOfStock': card.attributes.Stock === "Out of stock" })}></span></span>
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