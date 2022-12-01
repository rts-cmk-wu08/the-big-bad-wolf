import { useState, useEffect } from "react";
import axios from "axios";
import ShopCard from "../components/ShopCard";

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
            <header className="page-header">
                <h1 className="page-header__title">Products</h1>
            </header>
            
            <article className="page-content">
                
                { isLoading && <p>Loading</p> }
                { error && <p>{error}</p>}
                { shop && 
                    <div className="grid">
                        {shop.data.map(product => ( 
                            <ShopCard {...product} key={product.id} />
                        ))}
                    </div> 
                }

            </article>
        </>

     );
     
}

export default Shop;