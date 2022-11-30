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

            <header className="page-header">
                <h1 className="page-header__title">Product</h1>
            </header>

            <article className="page-content">

                { isLoading && <p>Loading</p> }
                { error && <p>{error}</p>}
                { details &&

                    <div className="detail whitebox grid col-2"> 

                        <div className="detail__img">
                            {details.data.attributes.Images.data.map(img => ( 
                                <LazyLoadImage effect="opacity" key={img.id} src={img.attributes.url} alt="" />
                            ))}
                        </div>

                        <div className="detail__info">

                            <h2 className="mb-0">{details.data.attributes.Name}</h2>
                            <p className="">Digital Output</p>
                            <p>{details.data.attributes.Description}</p>
                            <p>{details.data.attributes.Description}</p>

                            <form className="color-select">

                                <div className="color-select__item">
                                    <label className="form-control">
                                        <input type="radio" id="black" name="color-select" value="black" />
                                        Black
                                    </label>
                                </div>

                                <div className="color-select__item">
                                    <label className="form-control">
                                        <input type="radio" id="silver" name="color-select" value="silver" />
                                        Silver
                                    </label>
                                </div>

                                <div className="color-select__item">
                                    <label className="form-control">
                                        <input type="radio" id="gold" name="color-select" value="gold" />
                                        Gold
                                    </label>
                                </div>

                            </form>

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

                    </div>

                }



                

            </article> 
        </>
     );

}
 
export default Details;




