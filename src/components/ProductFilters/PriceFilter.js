import { useState, useEffect } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import "./Filters.scss";

function PriceFilter({onFilterChange, shop, selectedMaxPrice, selectedMinPrice}) {
   
    const shopMin = Math.min(...shop.map(product => product.attributes.Price));
    const shopMax = Math.max(...shop.map(product => product.attributes.Price));
      
    // const [minPrice, setMinPrice] = useState(shopMin);
    // const [maxPrice, setMaxPrice] = useState(shopMax);

    // const handleMinPriceChange = (event) => {
    //     setMinPrice(event.target.value);
    // };
    
    // const handleMaxPriceChange = (event) => {
    //     setMaxPrice(event.target.value);
    // };

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
            </div>

        </details>

    );

}

export default PriceFilter;