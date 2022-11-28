import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import "./home.scss"

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

        <section>

        <div className="home__top">
        <h1 className="home__headline">Popular products</h1>
        <button className="home__btn">See all products</button>
        </div>

            { isLoading && <p>Loading</p> }
            { error && <p>{error}</p>}
            { shop && 
                <div className="cards">
                    {shop.data.slice(0,4).map(product => ( 
                        <Card {...product} key={product.id} />
                    ))}
                </div> 
            }
        
        <div className="home__blackbox">
            <h2>What we do</h2>
        </div>
        </section>

     );
     
}

export default Shop;