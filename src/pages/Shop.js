import { useState, useEffect } from "react";
import axios from "axios";

var baseUrl = 'https://cryptic-genre-365612.appspot.com';
var url = baseUrl + '/api/products';

const Shop = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [shop, setShop] = useState(); 

    useEffect(() => {
        axios.get(url)
            .then(response => setShop(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setIsLoading(false))

    }, []);

    return (

        <>
        
            <h1>Her er Shop</h1>
            { isLoading }
            { error && <p>{error}</p>}
            { shop && 
                <ul className="items">
                    {shop.data.map(product => ( 
                        <li key={product.id}>
                            <h3>{product.attributes.Name}</h3>
                            <p>{product.attributes.Description}</p>
                        </li>
                    ))}

                </ul> 
            }

        </>

     );
     
}

export default Shop;