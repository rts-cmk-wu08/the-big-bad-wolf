import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "./card.scss";

import { IoOptionsOutline } from 'react-icons/io5';

const Card = (props) => {

    let product = props.attributes
    let link = '/shop/' + props.id

    return (
        
        <div className="card grid__item">
            <div className='card__compare'>
                <button className='card__compare-btn'>Compare <IoOptionsOutline /></button>
            </div>
            
            
            <div className="card__img" >

                {product.Images.data.map(img => ( 
                    <Link to={link} key={img.id} ><LazyLoadImage effect="opacity" src={img.attributes.url} alt={product.Name} /></Link>
                ))}

            </div>

            <h3 className="card__title"><Link to={link}>{product.Name}</Link></h3>
            <p className='card__price'>£ {product.Price}.00</p>
            <div className='card__submit'>
                
                <button className="btn card__btn" >Add to cart</button>
            
                <span className="addtocart__stock">{product.Stock} <span className="inStock"></span></span>
            </div>

        </div>

     );
     
}

export default Card;