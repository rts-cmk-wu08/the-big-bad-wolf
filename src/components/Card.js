import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "./card.scss";

const Card = (props) => {

    let product = props.attributes
    let link = '/shop/' + props.id

    return (
        
        <div className="card grid__item">

            <div className="card__img" >

                {product.Images.data.map(img => ( 
                    <Link to={link} key={img.id} ><LazyLoadImage effect="opacity" src={img.attributes.url} alt={product.Name} /></Link>
                ))}

            </div>

            <h3 className="card__title"><Link to={link}>{product.Name}</Link></h3>
            <p className='card__price'>£ {product.Price}.00</p>
            <button className="btn card__btn">Read more</button>

        </div>

     );
     
}

export default Card;