import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom";
import axios from "axios";
import ShopCard from "../components/shopCards/ShopCard";
import CompProdWidget from "../components/compareWidget/CompProdWidget";
import ColorFilters from "../components/shopFilters/ColorFilters";
import BrandFilters from "../components/shopFilters/BrandFilters";

let baseUrl = 'https://cryptic-genre-365612.appspot.com/api/products';

const Shop = () => {

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

    const [selectedColors, setSelectedColors] = useState(colorParams);
    const [selectedBrands, setSelectedBrands] = useState(brandParams);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [shop, setShop] = useState({ data: [] }); 

    useEffect(() => { 
        (async () => {
            try {
                let fetchUrl = `${baseUrl}?populate[0]=Images`;
                let colorFilters = 'filters[Colors][Name][$containsi]=';
                let brandFilters = 'filters[Brand][Name][$containsi]=';
    
                if (selectedColors.length === 0 && selectedBrands.length === 0) {
                    fetchUrl = `${baseUrl}?populate[0]=Images`;
                    navigate(``, { replace: true }) 
                } 
                
                if (selectedColors.length > 0 && selectedBrands.length === 0) {                    
                    const colorsQueryString = selectedColors.map(color => colorFilters + color);
                    fetchUrl = `${baseUrl}?${colorsQueryString.join('&')}&populate[0]=Images`;
                    navigate(`?colors=${selectedColors.join(',')}`, { replace: true }) 
                }

                if (selectedColors.length === 0 && selectedBrands.length > 0) {
                    const brandsQueryString = selectedBrands.map(brand => brandFilters + brand);
                    fetchUrl = `${baseUrl}?${brandsQueryString.join('&')}&populate[0]=Images`;
                    navigate(`?brands=${selectedBrands.join(',')}`, { replace: true }) 
                }

                if (selectedColors.length > 0 && selectedBrands.length > 0) {
                    const colorsQueryString = selectedColors.map(color => colorFilters + color);
                    const brandsQueryString = selectedBrands.map(brand => brandFilters + brand);
                    fetchUrl = `${baseUrl}?${colorsQueryString.join('&')}&${brandsQueryString.join('&')}&populate[0]=Images`;
                    navigate(`?colors=${selectedColors.join(',')}&brands=${selectedBrands.join(',')}`, { replace: true }) 
                }

                const response = await axios.get(fetchUrl);
                setShop(response.data);
                setIsLoading(false);
    
            } catch (err) {
                console.log(err);
                setError("Something went wrong");
            }

        })();
    
    }, [selectedColors, selectedBrands, navigate]);
    
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