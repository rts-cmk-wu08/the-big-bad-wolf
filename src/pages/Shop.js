import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard";
import CompareWidget from "../components/CompareWidget/CompareWidget";
import ColorFilters from "../components/ProductFilters/ColorFilters";
import BrandFilters from "../components/ProductFilters/BrandFilters";
import PriceFilter from "../components/ProductFilters/PriceFilter";


const Shop = () => {

    let navigate = useNavigate();
    let location = useLocation();

    const urlParams = new URLSearchParams(location.search);

    const extractParams = (paramName) => { 
        if (!urlParams.has(paramName)) { return []; } 
        return urlParams.getAll(paramName)[0].split(',').filter((param) => param !== '');
      }

    const colorParams = extractParams('colors');
    const brandParams = extractParams('brands');
    const maxPriceParams = extractParams('max');
    const minPriceParams = extractParams('min');
    const searchParams = extractParams('search');

    const [selectedColors, setSelectedColors] = useState(colorParams);
    const [selectedBrands, setSelectedBrands] = useState(brandParams);
    const [selectedMaxPrice, setSelectedMaxPrice] = useState(maxPriceParams ? maxPriceParams : []);
    const [selectedMinPrice, setSelectedMinPrice] = useState(minPriceParams ? minPriceParams : []);

    const [search] = useState(isNaN(searchParams) ? searchParams : []);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [shop, setShop] = useState({ data: [] }); 

    useEffect(() => { 
        (async () => {
            try {

                let baseUrl = 'https://cryptic-genre-365612.appspot.com/api/products';
                let colorFilters = 'filters[Colors][Name][$containsi]=';
                let brandFilters = 'filters[Brand][Name][$containsi]=';
                let priceMinFilter = 'filters[Price][$gte]=';
                let priceMaxFilter = 'filters[Price][$lte]=';
                let searchFilters = 'filters[Name][$containsi]=';
                let populateImages = 'populate[0]=Images';
                let hasFilters = false;

                const dependencies = [selectedColors, selectedBrands, selectedMinPrice, selectedMaxPrice, search];

                // Use the reduce() method to build the fetch URL based on the filter values
                let fetchUrl = dependencies.reduce((url, filterValues, i) => {
                    console.log(filterValues, i, 'reduced dependencies');

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
                                // Handle the minPrice filter
                                const minPriceQueryString = filterValues.map(minPrice => priceMinFilter + minPrice).join('&');
                                return `${url}${url !== baseUrl ? "&" : "?"}${minPriceQueryString}`;
                            case 3:
                                // Handle the maxPrice filter
                                const maxPriceQueryString = filterValues.map(maxPrice => priceMaxFilter + maxPrice).join('&');
                                return `${url}${url !== baseUrl ? "&" : "?"}${maxPriceQueryString}`;
                            case 4:
                                // Handle the search filter
                                const searchQueryString = filterValues.map(searchTerm => searchFilters + searchTerm).join('&');
                                return `${url}${url !== baseUrl ? "&" : "?"}${searchQueryString}`;
                            default:
                                // Handle any other cases
                                return url;
                        }



                    }, baseUrl);

                    
                console.log(fetchUrl, 'fetchUrl');

                // Update the URL query string to include the filter values
                let queryParams = "";
                dependencies.forEach((filterValues, i) => {
                    if (filterValues.length === 0) { return; }
                    let prefix = queryParams === "" ? "?" : "&";
                    switch (i) {
                        case 0: queryParams += `${prefix}colors=${filterValues.join(',')}`; break;
                        case 1: queryParams += `${prefix}brands=${filterValues.join(',')}`; break;
                        case 2: queryParams += `${prefix}min=${filterValues.find(minPrice => minPrice)}`; break;
                        case 3: queryParams += `${prefix}max=${filterValues.find(maxPrice => maxPrice)}`; break;
                        case 4: queryParams += `${prefix}search=${filterValues.join(',')}`; break;
                        default: break;
                    }
                });

                // Update the URL query string
                navigate(queryParams, { replace: true });

                // Add the populateImages parameter to the end of the fetch URL
                fetchUrl += (hasFilters ? `&` : `?`) + populateImages;

                const response = await axios.get(fetchUrl);
                setShop(response.data);
                setIsLoading(false);
    
            } catch (err) {
                console.log(err);
                setError("Something went wrong");
            }
            
        })();
    }, [selectedColors, selectedBrands, search, selectedMinPrice, selectedMaxPrice, navigate]);
    
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

        if (name.includes("minPrice")) {
            setSelectedMinPrice([value]);
        }

        if (name.includes("maxPrice")) {
            setSelectedMaxPrice([value]);
        }
    }


    return (
        <>  
            <header className="page-header">
                <h1 className="page-header__title">Products</h1>
            </header>
            <article className="page-content sidebar-left">
                
                { isLoading && <p>Loading...</p> }
                { error && <p>{error}</p>}
                { shop && 
                    <>
                        <div className="sidebar">
                            <div className="sidebar__inner">
                                <h3 className="sidebar__title">Filter by</h3>
                                <div className="sidebar__content">  
                                    <ColorFilters onFilterChange={onFilterChange} selectedColors={selectedColors} />
                                    <BrandFilters onFilterChange={onFilterChange} selectedBrands={selectedBrands} />
                                    <PriceFilter 
                                        onFilterChange={onFilterChange}
                                        selectedMaxPrice={selectedMaxPrice} 
                                        selectedMinPrice={selectedMinPrice}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="content grid">

                            {shop.data.length > 0 ? ( 
                                shop.data.map(product => 
                                    <ProductCard 
                                        product={product} 
                                        key={product.id} 
                                    />
                            )) : (
                                <p>No results.</p>
                            )}

                        </div>
                    </>
                }
            </article>
            
            <CompareWidget />
        </>
     );
}

export default Shop;