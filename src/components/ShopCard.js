import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CompareContext } from "../contexts/CompareContext";
import { IoOptionsOutline } from 'react-icons/io5';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "./card.scss";

const ShopCard = (props) => {

    const product = props.attributes
    const link = '/shop/' + props.id

    let imagesArray;

    try {
        // Try to get the values of the item's values property
        imagesArray = Object.values(product.Images);
    } catch (error) {
        // Set values to an empty array if there is an error
        imagesArray = [];
    }
    
    const [compCards, setCompCards] = useContext(CompareContext);

        return (
            
            <div className="card grid__item">
                <div className='card__compare'>
                 
                    <button className={`card__compare-btn ${ compCards.find(compCard => compCard.id === props.id) !== undefined ? 'card__compare-btn--active' : '' }`}
                        onClick={() => {
                            if ( compCards === undefined ) {
                                setCompCards([ props ]);
                            } else if ( compCards.length < 3 && compCards.find(compCard => compCard.id === props.id) === undefined ) {
                                setCompCards(prevArray => [...prevArray,  props ]);
                            }
                            
                        }}

                        >
                        Compare <IoOptionsOutline /> 
                    </button>
                </div>
                
                <div className="card__img" >

                    {imagesArray.map(img => ( 
                        <Link to={link} key={img[0].id} ><LazyLoadImage effect="opacity" src={img[0].attributes.url} alt={product.Name} /></Link>
                    ))}


                </div>

                <h3 className="card__title"><Link to={link}>{product?.Name}</Link></h3>
                <p className='card__price'>£ {product?.Price}.00</p>
                <div className='card__submit'>
                    
                    <button className="btn card__btn" >Add to cart</button>
                
                    <span className="addtocart__stock">{product?.Stock} <span className="inStock"></span></span>
                </div>

            </div>

        );


};

export default ShopCard;