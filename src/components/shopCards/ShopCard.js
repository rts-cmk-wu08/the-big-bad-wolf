import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CompareContext } from "../../contexts/CompareContext";
import { IoOptionsOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "./card.scss";

const ShopCard = (product) => {

    const link = '/shop/' + product.id
       
    const [compCards, setCompCards] = useContext(CompareContext);

    return (
        <div className="card grid__item">
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
                <button className="btn card__btn" >Add to cart</button>
                <span className="addtocart__stock">{product.attributes.Stock} <span className="inStock"></span></span>
            </div>
        </div>
    );
};

export default ShopCard;