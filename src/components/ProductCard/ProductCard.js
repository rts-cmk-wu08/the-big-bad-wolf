import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext } from "react";
import classnames from 'classnames';
import { CompareContext } from "../../contexts/CompareContext";
import { CartContext } from "../../contexts/CartContext";
import { IoOptionsOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "./ProductCard.scss";

const ProductCard = (product) => {

    let navigate = useNavigate();

    const link = '/shop/' + product.id
    const [compCards, setCompCards] = useContext(CompareContext);
    const [cartItems, setCartItems] = useContext(CartContext);

    // Get the current URL using the useLocation hook
    const location = useLocation();

    // Check if the current URL is the front page URL
    const isFrontPage = location.pathname === '/';

    return (
        <div className={classnames('card grid__item', { 'card-homepage': isFrontPage })}>
            <div className='card__compare'>
                <button className={`card__compare-btn ${ compCards.find(compCard => compCard.id === product.id) !== undefined ? 'card__compare-btn--active' : '' }`}
                    onClick={() => {
                        if ( compCards === undefined ) {
                            setCompCards([ product ]);
                        } else if ( compCards.length < 3 && compCards.find(compCard => compCard.id === product.id) === undefined ) {
                            setCompCards(prevArray => [...prevArray, product ]);
                        } else if ( compCards.find(compCard => compCard.id === product.id) !== undefined ) {
                            setCompCards(prevArray => prevArray.filter(compCard => compCard.id !== product.id));
                        }
                    }}
                >
                    {compCards.length === 3 && compCards.find(compCard => compCard.id === product.id) === undefined ? 
                    <>Compare is full <IoOptionsOutline className='icon-compare'/></> : compCards.find(compCard => compCard.id === product.id) !== undefined ? 
                    <>Compare <IoCloseCircleOutline className='icon-close'/></> : <>Compare <IoOptionsOutline className='icon-compare'/></> }
                </button>
            </div>

            <div className="card__img" >
                {Object.values(product.attributes.Images).map(img => ( 
                    <Link to={link} key={img[0].id} >
                        <LazyLoadImage effect="opacity" src={img[0].attributes.url} alt={product.attributes.Name} />
                    </Link>
                ))}
            </div>
            <h3 className="card__title"><Link to={link}>{product.attributes.Name}</Link></h3>
            <p className='card__price'><span>£</span>{product.attributes.Price}.00</p>
            <div className='card__submit'>
                <button className="btn card__btn" 
                    onClick={() => {
                        if ( cartItems === undefined ) {
                            setCartItems([ product ]);
                        } else {
                            // If the product is in the cart, remove it from the cart
                            if (cartItems.find(cartItem => cartItem.id === product.id)) {
                                setCartItems(prevArray => prevArray.filter(cartItem => cartItem.id !== product.id));
                            } else {
                                // If the product is not in the cart, add it to the cart
                                setCartItems(prevArray => [...prevArray, product]);
                            }
                        }
                    }}
                >
                    { cartItems && cartItems.find(cartItem => cartItem.id === product.id) ? "Remove from Cart" : "Add to Cart" }
                </button>
                <span className="addtocart__stock">{product.attributes.Stock} <span className="inStock"></span></span>
            </div>
            <div className='card__readmore'>
                <button className="btn card__btn" 
                    onClick={() => { navigate(link);}}
                >Read more</button>
            </div>
        </div>
    );
};

export default ProductCard;