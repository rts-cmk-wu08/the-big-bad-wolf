import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Card = (props) => {

    let product = props.attributes
    let link = '/shop/' + props.id

    return (
        
        <div>

            {product.Images?.data.map(img => ( 
                <Link to={link} key={img.id} ><LazyLoadImage effect="opacity" src={img.attributes.url} alt={product.Name} /></Link>
            ))}

            <h3><Link to={link}>{product.Name}</Link></h3>
            <p>{product.Description}</p>

        </div>

     );
     
}

export default Card;