import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Filters.scss";

import { IoChevronDownOutline } from 'react-icons/io5';

function ColorFilters({onFilterChange}) {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [colors, setColors] = useState([]);

    useEffect(() => {
        // Fetch the list of colors from the API
        axios.get('https://cryptic-genre-365612.appspot.com/api/colors')
            .then(response => setColors(response.data))
            .finally(() => setIsLoading(false))
            .catch(error => setError(error));

    }, []);

    return (

            <details className='acc-filters' open>

                <summary className="acc-filters__title">Color <IoChevronDownOutline /></summary>

                <div className='acc-filters__options'>

                    { isLoading && <p>Loading filters...</p> }
                    { error && <p>{error}</p>}
                    { colors.data &&

                    <>
                        {colors.data.map(color => (
                            <div key={color.id} className="acc-filters__option">
                                <input
                                    type="checkbox"
                                    id={color.Name.toLowerCase()}
                                    name={"color_" + color.Name}
                                    value={color.Name.toLowerCase()}
                                    onChange={onFilterChange}
                                />
                                <label htmlFor={color.Name.toLowerCase()}>{color.Name}</label>
                            </div>
                            
                        ))}
                    
                    </>

                    }
                </div>

            </details>

    );

}

export default ColorFilters;