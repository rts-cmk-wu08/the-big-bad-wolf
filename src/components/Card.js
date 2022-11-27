import { Link } from 'react-router-dom';

const Card = (props) => {

    const product = props.attributes

    return (
        
        <li>

            {product.Images.data.map(img => ( 
                <Link to={`/shop/${props.id}`} key={img.id} ><img src={img.attributes.url} alt={product.Name} /></Link>
            ))}

            <h3>{product.Name}</h3>
            <p>{product.Description}</p>

        </li>

     );
     
}

export default Card;