import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

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

            <h1>Here are the details</h1>
            { isLoading && <p>Loading</p> }
            { error && <p>{error}</p>}
            { details && 
                <div>

                    {details.data.attributes.Images?.data.map(img => ( 
                        <LazyLoadImage effect="opacity" key={img.id} src={img.attributes.url} alt="" />
                    ))}

                    <h2>{details.data.attributes.Name}</h2>
                    <p>{details.data.attributes.Description}</p>

                </div> 
            }

        </> 

     );

}
 
export default Details;




