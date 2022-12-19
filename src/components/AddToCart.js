import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { IoAdd, IoRemove } from 'react-icons/io5';
import classnames from 'classnames';
import "./AddToCart.scss";


const AddToCart = ({product}) => { 

    const [cartItems, setCartItems, updateCartItem, updateCart] = useContext(CartContext);
    const [amount, setAmount] = useState(1);
    const [color, setColor] = useState('black');

    console.log(product);


    return (
        
        <div className="form addtocart">

            <div className="color-select form__fieldgroup">

                <div className="color-select__item">
                    <label className="form-control">
                        <input type="radio" id="black" name="color-select" value="black" defaultChecked/>
                        Black
                    </label>
                </div>

                <div className="color-select__item">
                    <label className="form-control">
                        <input type="radio" id="silver" name="color-select" value="silver" />
                        Silver
                    </label>
                </div>

                <div className="color-select__item">
                    <label className="form-control">
                        <input type="radio" id="gold" name="color-select" value="gold" />
                        Gold
                    </label>
                </div>
            </div> 


            <div className="price form__fieldgroup">
                    <span className="addtocart__price">£ {product.attributes.Price}.00</span>
                    <span className="addtocart__stock">{product.attributes.Stock} <span className="inStock"></span></span>
            </div>


            <div className="amount form__fieldgroup">
                <div className="cart-amount cart-add__item">
                    <button className="cart-amount__btn" onClick={() => {setAmount(amount > 1 ? amount - 1 : amount )}}><IoRemove className='icon-remove'/></button>
                        <input
                            className="cart-amount__input"
                            type="number"
                            name="amount"
                            value={amount}
                            onChange={(event) => {
                                setAmount(parseInt(event.target.value));
                            }}
                        />
                    <button className="cart-amount__btn" onClick={() => {setAmount(amount + 1)}}><IoAdd className='icon-add'/></button>
                </div>
               
                <div className="cart-add__item">
                    <button className="btn card__btn" onClick={() => {
                            if ( cartItems.find(cartItem => cartItem.id === product.id) !== undefined ) {
                                updateCart(product, 'remove');
                            } else {
                                updateCart(product, 'add', amount, color);
                            }
                        }}> 
                        {cartItems.find(cartItem => cartItem.id === product.id) !== undefined ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                </div>

            </div>



        </div>



    );
}

export default AddToCart;