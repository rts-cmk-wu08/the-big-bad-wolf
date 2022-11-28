import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "./details.scss"

var baseUrl = 'https://cryptic-genre-365612.appspot.com';
var url = baseUrl + '/api/products';

const Details = () => {

    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [details, setDetails] = useState();

    useEffect(() => {
        axios.get(`${url}/${id}?populate=*`)
            .then(response => setDetails(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setIsLoading(false))
            
    }, [id]);

    return ( 

        <>
            <h1  className="detail__headline">Product</h1>
        <section className="details">

            { isLoading && <p>Loading</p> }
            { error && <p>{error}</p>}
            { details && 
                <article className="detail">
                    <div className="detail__img">
                        {details.data.attributes.Images.data.map(img => ( 
                            <LazyLoadImage effect="opacity" key={img.id} src={img.attributes.url} alt="" />
                        ))}
                    </div>
                    <div className="detail__info">
                        <h2 className="zero--margin">{details.data.attributes.Name}</h2>
                        <p className="zero--margin fat">Digital Output</p>
                        <p>{details.data.attributes.Description}</p>
                        <p>{details.data.attributes.Description}</p>
                        <div className="buttons">
                            <button className="black"></button>
                            <button className="silver"></button>
                            <button className="gold"></button>
                        </div>
                        <div className="price">
                            <h3 className="detail__price">£ {details.data.attributes.Price}.00</h3>
                            <p className="flex">{details.data.attributes.Stock}<div className="inStock"></div></p>
                            
                        </div>


                            <div className="detail__amount">
                            <div className="amount">
                                <p className="bigger">-</p>
                                <input className="detail__input" type="number" name="amount" id="amount" />
                                <p className="bigger">+</p>
                            </div>


                            <div className="btn">
                                <button className="detail__btn">Add to cart</button>
                            </div>
                            </div>
                    </div>



                </article> 
            }
            <div className="line"></div>

        </section> 
        </>
     );

}
 
export default Details;




