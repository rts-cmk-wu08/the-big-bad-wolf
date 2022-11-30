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

        <>

        <section className="featured-products">

            <header className="block-header">
                <h1 className="block-header__title">Popular products</h1>
                <button className="btn block-header__btn">See all products</button>
            </header>

            { isLoading && <p>Loading</p> }
            { error && <p>{error}</p>}
            { shop && 
                <div className="grid col-4">
                    {shop.data.slice(0,4).map(product => ( 
                        <Card {...product} key={product.id} />
                    ))}
                </div> 
            }

        </section>

        <section className="blackbox alignfull">

            <div className="grid col-2 container">

                <div className="grid__item">
                    <h2>What we do</h2>
                    <p>We look forward to customising a system to meet your needs.</p>
                    <p>We don’t favour one manufacturer over another – the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.</p>
                    <p>If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.</p>
                    <p>One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams.</p>
                </div>

                <div className="grid__item">
                    <div className="opening-hours">
                        <h2>Opening hours</h2>
                        <p><b>Edinburgh</b><br />
                            2 Joppa Rd, Edinburgh, EH15 2EU<br />
                            Monday to Friday: 10:00am - 5:30pm<br />
                            Saturday: 10:00am - 5:30pm<br />
                            Sunday: Closed
                        </p>

                        <p><b>Falkirk</b><br />
                            44 Cow Wynd, Falkirk, Central Region, FK1 1PU<br />
                            Monday to Friday: 10:00am - 5:30pm<br />
                            Saturday - By appointment only<br />
                            Sunday: Closed
                        </p>
                    </div>
                </div>
            </div>
        </section>

        </>

     );
     
}

export default Shop;