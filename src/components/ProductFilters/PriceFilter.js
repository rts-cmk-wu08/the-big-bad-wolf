import { useState, useEffect } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import "./Filters.scss";

function PriceFilter({onFilterChange, shop}) {
   
    const shopMin = shop.length ? Math.min(...shop.map(product => product.attributes.Price)) : 0;
    const shopMax = shop.length ? Math.max(...shop.map(product => product.attributes.Price)) : 0;
      
    const [minPrice, setMinPrice] = useState(shopMin);
    const [maxPrice, setMaxPrice] = useState(shopMax);

    console.log(shopMin, shopMax, 'pricefilter');

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };
    
    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    return (

        <details className='acc-filters priceRange' open>

            <summary className="acc-filters__title">Price <IoChevronDownOutline /></summary>

            <div className='acc-filters__options'>
                <div className="acc-filters__option">
                    <label htmlFor="minPrice">Min price</label>
                    <div className="priceRange__range">
                        <input
                            type="range"
                            id="minPrice"
                            name="minPrice"
                            value={minPrice}
                            min={shopMin}
                            max={maxPrice - 10}
                            step="10"
                            onChange={handleMinPriceChange}
                        />
                        <input
                            type="number"
                            id="minPrice"
                            name="minPrice"
                            value={minPrice}
                            min={shopMin}
                            max={maxPrice - 10}
                            step="10"
                            onChange={handleMinPriceChange}
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
                            value={maxPrice}
                            min={minPrice}
                            max={shopMax}
                            step="10"
                            onChange={handleMaxPriceChange}
                        />
                        <input
                            type="number"
                            id="maxPrice"
                            name="maxPrice"
                            value={maxPrice}
                            min={minPrice}
                            max={shopMax}
                            step="10"
                            onChange={handleMaxPriceChange}
                        />
                    </div>
                </div>
            </div>

        </details>

    );

}

export default PriceFilter;