import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import "./details.scss"

import AddToCart from "../components/AddToCart";

var baseUrl = 'https://cryptic-genre-365612.appspot.com';
var url = baseUrl + '/api/products';

const Details = () => {

    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [details, setDetails] = useState();

    useEffect(() => {
        axios.get(`${url}/${id}?populate[0]=Images`)
            .then(response => setDetails(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setIsLoading(false))
            
    }, [id]);

    return ( 

        <>

            <header className="page-header">
                <h1 className="page-header__title">Product</h1>
            </header>

            <article className="page-content">

                { isLoading && <p>Loading</p> }
                { error && <p>{error}</p>}
                { details && (

                    <div className="detail whitebox grid"> 

                        <div className="detail__img">

                            {details.data.attributes.Images && 
                                Object.values(details.data.attributes.Images).map(img => ( 
                                    <LazyLoadImage 
                                        effect="opacity" 
                                        key={img[0].id} 
                                        src={img[0].attributes.url} 
                                        alt={details.data.attributes.Name} 
                                    />
                            ))}

                        </div>

                        <div className="detail__info">

                            <h2 className="detail__title mb-0">{details.data.attributes.Name}</h2>
                            <h3 className="detail__subtitle">(Digital Output)</h3>
                            <p>{details.data.attributes.Description}</p>

                            <AddToCart {...details.data.attributes} />

                        </div>

                    </div>

                )}

            </article> 
            
        </>

     );

}
 
export default Details;