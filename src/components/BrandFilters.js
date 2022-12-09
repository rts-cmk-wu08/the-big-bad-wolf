import React, { useState, useEffect } from 'react';
import axios from "axios";
import { IoChevronDownOutline } from 'react-icons/io5';

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
                                id={brand.Name.toLowerCase()}
                                name={"brand_" + brand.Name}
                                value={brand.Name.toLowerCase()}
                                checked={selectedBrands.includes(brand.Name.toLowerCase())}
                                onChange={onFilterChange}
                            />
                            <label htmlFor={brand.Name.toLowerCase()}>{brand.Name}</label>
                        </div>
                        
                    ))}
                
                </>

                }

            </div>

        </details>

    );

}

export default BrandFilters;