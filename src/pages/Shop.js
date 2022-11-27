import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

var baseUrl = 'https://cryptic-genre-365612.appspot.com';
var url = baseUrl + '/api/products';

const Shop = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [shop, setShop] = useState(); 

    useEffect(() => {
        axios.get(`${url}?populate=*`)
            .then(response => setShop(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setIsLoading(false))

    }, []);

    return (

        <>
        
            <h1>Her er Shop</h1>
            { isLoading && <p>Loading</p> }
            { error && <p>{error}</p>}
            { shop && 
                <ul>
                    {shop.data.map(product => ( 
                        <Card {...product} key={product.id} />
                    ))}
                </ul> 
            }

        </>

     );
     
}

export default Shop;