import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "./card.scss";

import { IoOptionsOutline } from 'react-icons/io5';

const Card = (props) => {

    let product = props.attributes
    let link = '/shop/' + props.id

    if (product.Images && product.Images.data) {

        return (
            
            <div className="card grid__item">
                <div className='card__compare'>
                    <button className='card__compare-btn'>Compare <IoOptionsOutline /></button>
                </div>
                
                
                <div className="card__img" >

                    {product.Images.data?.map(img => {

                        if (typeof img.attributes.url === 'string' && img.attributes.url.trim() !== '') {
                           
                            return (
                                <Link to={link} key={img.id} ><LazyLoadImage effect="opacity" src={img.attributes.url} alt={product.Name} /></Link>
                            );

                        } else {

                            return (
                                <p>Error loading image</p>
                            );
                        }

                    })}


                </div>

                <h3 className="card__title"><Link to={link}>{product.Name}</Link></h3>
                <p className='card__price'>£ {product.Price}.00</p>
                <div className='card__submit'>
                    
                    <button className="btn card__btn" >Add to cart</button>
                
                    <span className="addtocart__stock">{product.Stock} <span className="inStock"></span></span>
                </div>

            </div>

        );

    } else {
        return (
            <p>Could not connect to API</p>
        );
    }
     
};

export default Card;