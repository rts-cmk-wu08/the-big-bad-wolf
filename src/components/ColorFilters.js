import React, { useState, useEffect } from 'react';
import axios from "axios";

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
        <div className="sidebar__filter-options">

            { isLoading && <p>Loading filters...</p> }
            { error && <p>{error}</p>}
            { colors.data &&

            <>
                {colors.data.map(color => (
                    <div key={color.id} className="sidebar__filter-option">
                        <input
                            type="checkbox"
                            id={color.Name.toLowerCase()}
                            name={color.Name}
                            value={color.Name}
                            onChange={onFilterChange}
                        />
                        <label htmlFor={color.Name.toLowerCase()}>{color.Name}</label>
                    </div>
                    
                ))}
            
            </>

            }

        </div>

    );

}

export default ColorFilters;


