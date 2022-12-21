import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { CompareContext } from "../contexts/CompareContext";
import { IoOptionsOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import axios from "axios";
import Chat from "../components/ChatFunction";
import AddToCart from "../components/AddToCart";
import CompareWidget from "../components/CompareWidget/CompareWidget";
import "./details.scss";

var baseUrl = 'https://cryptic-genre-365612.appspot.com';
var url = baseUrl + '/api/products';

const Details = () => {

    const { id } = useParams()

    const [compCards, setCompCards] = useContext(CompareContext);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`${url}/${id}?populate[0]=Images`)
            .then(response => setProduct(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setIsLoading(false))
    }, [id]);

    console.log(product?.data, 'product');


    return ( 

        <>

            <header className="page-header">
                <h1 className="page-header__title">Product</h1>
            </header>
            <div className='details-compare card__compare'>
                <button className={`card__compare-btn ${ compCards.find(compCard => compCard.id === product?.data.id) !== undefined ? 'card__compare-btn--active' : '' }`}
                    onClick={() => {
                        if ( compCards === undefined ) {
                            setCompCards([ product?.data ]);
                        } else if ( compCards.length < 3 && compCards.find(compCard => compCard.id === product?.data.id) === undefined ) {
                            setCompCards(prevArray => [...prevArray, product?.data ]);
                        } else if ( compCards.find(compCard => compCard.id === product?.data.id) !== undefined ) {
                            setCompCards(prevArray => prevArray.filter(compCard => compCard.id !== product?.data.id));
                        }
                    }}
                >
                    {compCards.length === 3 && compCards.find(compCard => compCard.id === product?.data.id) === undefined ? 
                    <>Compare is full <IoOptionsOutline className='icon-compare'/></> : compCards.find(compCard => compCard.id === product?.data.id) !== undefined ? 
                    <>Compare <IoCloseCircleOutline className='icon-close'/></> : <>Compare <IoOptionsOutline className='icon-compare'/></> }
                </button>
            </div>
            <article className="page-content whitebox">

                { isLoading && <p>Loading</p> }
                { error && <p>{error}</p>}
                { product && (

                    <div className="detail grid"> 

                        <div className="detail__img">

                            {product.data.attributes.Images && 
                                Object.values(product.data.attributes.Images).map(img => ( 
                                    <LazyLoadImage 
                                        effect="opacity" 
                                        key={img[0].id} 
                                        src={img[0].attributes.url} 
                                        alt={product.data.attributes.Name} 
                                    />
                            ))}

                        </div>

                        <div className="detail__info">

                            <h2 className="detail__title mb-0">{product.data.attributes.Name}</h2>
                            <h3 className="detail__subtitle">(Digital Output)</h3>
                            <p>{product.data.attributes.Description}</p>

                            <AddToCart product={product.data} />

                        </div>

                    </div>

                )}
                <Chat />
            </article> 
            <CompareWidget />

        </>

     );

}
 
export default Details;