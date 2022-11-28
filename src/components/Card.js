import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "./card.scss"

const Card = (props) => {

    let product = props.attributes
    let link = '/shop/' + props.id

    if (!product.Images.data[0].attributes) {
        return <p>...</p>
    }

    return (
        
        <div className="card center">


            {product.Images.data.map(img => ( 
                <Link to={link} key={img.id} ><LazyLoadImage effect="opacity" src={img.attributes.url} alt={product.Name} /></Link>
            ))}

            <h3><Link className="card__link" to={link}>{product.Name}</Link></h3>
            {/* <p>{product.Description}</p> */}
            <p>£ {product.Price}.00</p>
            <button className="card__btn">Read more</button>

        </div>

     );
     
}

export default Card;