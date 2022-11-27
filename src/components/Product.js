const Product = (props) => {

    const product = props.attributes

    return (
        
        <li>
            <h3>{product.Name}</h3>
            <p>{product.Description}</p>
        </li>

     );
     
}

export default Product;