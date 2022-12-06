import React, { useState, useEffect } from 'react';
import axios from "axios";

function BrandFilters({onFilterChange}) {

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
        <div className="sidebar__filter-options">

            <h3 className="sidebar__filter-title">Filter by brand</h3>

            { isLoading && <p>Loading filters...</p> }
            { error && <p>{error}</p>}
            { brands.data &&

            <>
                {brands.data.map(brand => (
                    <div key={brand.id} className="sidebar__filter-option">
                        <input
                            type="checkbox"
                            id={brand.Name.toLowerCase()}
                            name={"brand_" + brand.Name}
                            value={brand.Name}
                            onChange={onFilterChange}
                        />
                        <label htmlFor={brand.Name.toLowerCase()}>{brand.Name}</label>
                    </div>
                    
                ))}
            
            </>

            }

        </div>

    );

}

export default BrandFilters;