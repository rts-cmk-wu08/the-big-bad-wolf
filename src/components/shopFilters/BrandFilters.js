import React, { useState, useEffect } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import axios from "axios";
import "./Filters.scss";


function BrandFilters({onFilterChange, selectedBrands}) {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        // Fetch the list of colors from the API
        axios.get('https://cryptic-genre-365612.appspot.com/api/brands')
            .then(response => setBrands(response.data))
            .finally(() => setIsLoading(false))
            .catch(error => setError(error));

    }, []);

    return (
        <details className='acc-filters' open>

            <summary className="acc-filters__title">Brand <IoChevronDownOutline /></summary>

            <div className='acc-filters__options'>

                { isLoading && <p>Loading filters...</p> }
                { error && <p>{error}</p>}
                { brands.data &&

                <>
                    {brands.data.map(brand => (
                        <div key={brand.id} className="acc-filters__option">
                            <input
                                type="checkbox"
                                id={brand.attributes.Name.toLowerCase()}
                                name={"brand_" + brand.attributes.Name}
                                value={brand.attributes.Name.toLowerCase()}
                                checked={selectedBrands.includes(brand.attributes.Name.toLowerCase())}
                                onChange={onFilterChange}
                            />
                            <label htmlFor={brand.attributes.Name.toLowerCase()}>{brand.attributes.Name}</label>
                        </div>
                        
                    ))}
                
                </>

                }

            </div>

        </details>

    );

}

export default BrandFilters;