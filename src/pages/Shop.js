import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom";
import axios from "axios";
import ShopCard from "../components/shopCards/ShopCard";
import CompProdWidget from "../components/compareWidget/CompProdWidget";
import ColorFilters from "../components/shopFilters/ColorFilters";
import BrandFilters from "../components/shopFilters/BrandFilters";

const Shop = (props) => {

    let navigate = useNavigate();
    let location = useLocation();

    // Create an instance of the URLSearchParams class
    const urlParams = new URLSearchParams(location.search);

    const extractParams = (paramName) => {
        if (!urlParams.has(paramName)) { return []; }
        return urlParams.getAll(paramName)[0].split(',').filter((param) => param !== '');
      }

    // Use the extractParams function to get the values for the "colors" and "brands" parameters
    const colorParams = extractParams('colors');
    const brandParams = extractParams('brands');
    const searchParams = extractParams('search');

    const [selectedColors, setSelectedColors] = useState(colorParams);
    const [selectedBrands, setSelectedBrands] = useState(brandParams);
    const [search, setSearch] = useState(searchParams);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [shop, setShop] = useState({ data: [] }); 

    useEffect(() => { 
        (async () => {
            try {
                
                let baseUrl = 'https://cryptic-genre-365612.appspot.com/api/products';
                let colorFilters = 'filters[Colors][Name][$containsi]=';
                let brandFilters = 'filters[Brand][Name][$containsi]=';
                let searchFilters = 'filters[Name][$containsi]=';
                let populateImages = 'populate[0]=Images';
                let hasFilters = false;

                // Create an array containing all of the filter values
                const filterValues = [selectedColors, selectedBrands, search];

                // Use the reduce() method to build the fetch URL based on the filter values
                let fetchUrl = filterValues.reduce((url, filterValues, i) => {
                    if (filterValues.length === 0) { return url; }
                        hasFilters = true;
                        // Use a switch statement to handle each filter type
                        switch (i) {
                            case 0:
                                // Handle the color filter
                                const colorQueryString = filterValues.map(color => colorFilters + color).join('&');
                                return `${url}${url !== baseUrl ? "&" : "?"}${colorQueryString}`;
                            case 1:
                                // Handle the brand filter
                                const brandQueryString = filterValues.map(brand => brandFilters + brand).join('&');
                                return `${url}${url !== baseUrl ? "&" : "?"}${brandQueryString}`;
                            case 2:
                                // Handle the search filter
                                const searchQueryString = filterValues.map(searchTerm => searchFilters + searchTerm).join('&');
                                return `${url}${url !== baseUrl ? "&" : "?"}${searchQueryString}`;
                        }
                    }, baseUrl);


                // Update the URL query string to include the filter values
                let queryParams = "";
                filterValues.forEach((filterValues, i) => {
                    if (filterValues.length === 0) { return; }
                    console.log(filterValues, "filterValues") 
                    let prefix = "";
                    if (queryParams === "") {
                        prefix = "?";
                    } else {
                        prefix = "&";
                    }

                    switch (i) {
                        case 0: queryParams += `${prefix}colors=${filterValues.join(',')}`; break;
                        case 1: queryParams += `${prefix}brands=${filterValues.join(',')}`; break;
                        case 2: queryParams += `${prefix}search=${filterValues.join(',')}`; break;
                    }
                });
                
                navigate(queryParams, { replace: true });

                // Add the populateImages parameter to the end of the fetch URL, prefixed with '?' if there are no filters, or '&' if there are filters
                fetchUrl += hasFilters ? `&${populateImages}` : `?${populateImages}`;

                

                console.log(fetchUrl);

                const response = await axios.get(fetchUrl);
                setShop(response.data);
                setIsLoading(false);
    
            } catch (err) {
                console.log(err);
                setError("Something went wrong");
            }

        })();
    
    }, [selectedColors, selectedBrands, search, navigate]);
    
    const onFilterChange = (event) => {

        const { name, checked, value } = event.target;

        if (name.includes("color_")) {
            if (checked) { setSelectedColors([...selectedColors, value]); } 
            else { setSelectedColors(selectedColors.filter((filter) => filter !== value)); }
        }

        if (name.includes("brand_")) {
            if (checked) { setSelectedBrands([...selectedBrands, value]); } 
            else { setSelectedBrands(selectedBrands.filter(filter => filter !== value)); }
        }
    }

    return (
        <>  
            <header className="page-header">
                <h1 className="page-header__title">Products</h1>
            </header>
            <article className="page-content sidebar-left">
                    <div className="sidebar">
                        <div className="sidebar__inner">
                            <h3 className="sidebar__title">Sort by</h3>
                            <div className="sidebar__content">                               
                                <ColorFilters onFilterChange={onFilterChange} selectedColors={selectedColors} />
                                <BrandFilters onFilterChange={onFilterChange} selectedBrands={selectedBrands} />
                            </div>
                        </div>
                    </div>
                
                { isLoading && <p>Loading...</p> }
                { error && <p>{error}</p>}
                { shop && shop.data &&
                    <>
                        <div className="content grid">

                            {shop.data && shop.data.length > 0 ? ( 
                                shop.data.map(product => <ShopCard {...product} key={product.id} />)
                            ) : (
                                <p>No results.</p>
                            )}

                        </div>
                    </>
                }
            </article>
            
            <CompProdWidget />
        </>
     );
}

export default Shop;