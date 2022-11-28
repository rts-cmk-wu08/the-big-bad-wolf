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
        
        <article className="home__blackbox">
            <div className="blackbox__left">
            <h2>What we do</h2>
            <p>We look forward to customising a system to meet your needs.</p>
            <p>We don’t favour one manufacturer over another – the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.</p>
            <p>If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.</p>
            <p>One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams.</p>
            </div>
            <div className="blackbox__right">
            <h2>Opening hours</h2>
            <p className="bold">Edinburgh</p>
            <p>2 Joppa Rd,Edinburgh, EH15 2EU</p>
            <p>Monday to Friday: 10:00am - 5:30pm</p>
            <p>Saturday: 10:00am - 5:30pm</p>
            <p>Sunday: Closed</p>
            <p className="bold">Falkirk</p>
            <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
            <p>Monday to Friday: 10:00am - 5:30pm</p>
            <p>Saturday - By appointment only</p>
            <p>Sunday: Closed</p>
            </div>
        </article>
        </section>

     );
     
}

export default Shop;