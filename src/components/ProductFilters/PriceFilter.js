import { useState, useEffect } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import axios from "axios";
import "./Filters.scss";

function PriceFilter({onFilterChange, selectedMaxPrice, selectedMinPrice}) {
   
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);

    const [shopMin, setShopMin] = useState(0);
    const [shopMax, setShopMax] = useState(0);

    useEffect(() => {
        axios.get('https://cryptic-genre-365612.appspot.com/api/products')
            .then(response => setProducts(response.data))
            .finally(() => setIsLoading(false))
            .catch(error => setError(error));

            if (products.data) {
                setShopMin(Math.min(...products.data?.map(product => product.attributes.Price)));
                setShopMax(Math.max(...products.data?.map(product => product.attributes.Price)));
            }

    }, [products]);


    return (

        <details className='acc-filters priceRange' open>

            <summary className="acc-filters__title">Price <IoChevronDownOutline /></summary>

            <div className='acc-filters__options'>

            { isLoading && <p>Loading filters...</p> }
            { error && <p>{error}</p>}
            { products.data &&

                <>
                <div className="acc-filters__option">
                    <label htmlFor="minPrice">Min price</label>
                    <div className="priceRange__range">
                        <input
                            type="range"
                            id="minPrice"
                            name="minPrice"
                            value={selectedMinPrice.length > 0 ? selectedMinPrice : shopMin}
                            min={shopMin}
                            max={selectedMaxPrice.length > 0 ? selectedMaxPrice - 1 : shopMax - 1}
                            step="10"
                            onChange={onFilterChange}
                        />
                        <input
                            type="number"
                            id="minPrice"
                            name="minPrice"
                            value={selectedMinPrice.length > 0 ? selectedMinPrice : shopMin}
                            min={shopMin}
                            max={selectedMaxPrice.length > 0 ? selectedMaxPrice - 1 : shopMax - 1}
                            step="10"
                            onChange={onFilterChange}
                        />
                    </div>
                </div>
                <div className="acc-filters__option">
                    <label htmlFor="maxPrice">Max price</label>
                    <div className="priceRange__range">
                        <input
                            type="range"
                            id="maxPrice"
                            name="maxPrice"
                            value={selectedMaxPrice.length > 0 ? selectedMaxPrice : shopMax}
                            min={selectedMinPrice.length > 0 ? selectedMinPrice : shopMin}
                            max={shopMax}
                            step="10"
                            onChange={onFilterChange}
                        />
                        <input
                            type="number"
                            id="maxPrice"
                            name="maxPrice"
                            value={selectedMaxPrice.length > 0 ? selectedMaxPrice : shopMax}
                            min={selectedMinPrice.length > 0 ? selectedMinPrice : shopMin}
                            max={shopMax}
                            step="10"
                            onChange={onFilterChange}
                        />
                    </div>
                </div>
                {/* <div className="acc-filters__option">
                    <button className='btn'>Set pricerange</button>
                    <button  className='btn'>Clear pricerange</button>
                </div> */}
                
                </>
            }

            </div>

        </details>

    );

}

export default PriceFilter;