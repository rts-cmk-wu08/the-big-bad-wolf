import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom";
import axios from "axios";
import ShopCard from "../components/ShopCard";
import CompProdWidget from "../components/CompProdWidget";
import ColorFilters from "../components/ColorFilters";
import BrandFilters from "../components/BrandFilters";

var baseUrl = 'https://cryptic-genre-365612.appspot.com';
var url = baseUrl + '/api/products';

const Shop = () => {

    let navigate = useNavigate();
    let location = useLocation();

    // Create an instance of the URLSearchParams class
    const urlParams = new URLSearchParams(location.search);

    // Get the values for the "colors" and "brands" parameters
    const colors = urlParams.getAll('colors');
    const brands = urlParams.getAll('brands');

    const colorArray = colors.split(',');

    console.log(colorArray);

    const [selectedColors, setSelectedColors] = useState(colors);
    const [selectedBrands, setSelectedBrands] = useState(brands);
    
    const [error, setError] = useState();
    const [shop, setShop] = useState(); 

    console.log(selectedColors);

    useEffect(() => { 
    
        (async () => {

            try {
    
                let fetchUrl = `${url}?populate[0]=Images`;

                if (selectedColors.length === 0 && selectedBrands.length === 0) {
                    fetchUrl = `${url}?populate[0]=Images`;
                    navigate(``, { replace: true }) 
                }
                
                if (selectedColors.length > 0 && selectedBrands.length === 0) {                    
                    const colorsQueryString = selectedColors.map(color => `filters[Colors][Name][$containsi]=${color}`);
                    fetchUrl = `${url}?${colorsQueryString.join('&')}&populate[0]=Images`;
                    navigate(`?colors=${selectedColors.join(',')}`, { replace: true }) 
                }

                if (selectedColors.length === 0 && selectedBrands.length > 0) {
                    const brandsQueryString = selectedBrands.map(brand => `filters[Brands][Name][$containsi]=${brand}`);
                    fetchUrl = `${url}?${brandsQueryString.join('&')}&populate[0]=Images`;
                    navigate(`?brands=${selectedBrands.join(',')}`, { replace: true }) 
                }

                if (selectedColors.length > 0 && selectedBrands.length > 0) {
                    const colorsQueryString = selectedColors.map(color => `filters[Colors][Name][$containsi]=${color}`);
                    const brandsQueryString = selectedBrands.map(brand => `filters[Brands][Name][$containsi]=${brand}`);
                    fetchUrl = `${url}?${colorsQueryString.join('&')}&${brandsQueryString.join('&')}&populate[0]=Images`;
                    navigate(`?colors=${selectedColors.join(',')}&brands=${selectedBrands.join(',')}`, { replace: true }) 

                }

                console.log(fetchUrl);
            
                const response = await axios.get(fetchUrl);
                setShop(response.data);

    
            } catch (err) {
                setError("Something went wrong");
            }

        })();
    
    }, [selectedColors, selectedBrands, navigate]);
    
    console.log(shop);

    const onFilterChange = (event) => {

        const { name, checked, value } = event.target;

        if (name.includes("color_")) {
            if (checked) {
                setSelectedColors([...selectedColors, value]);
            } else {
                setSelectedColors(selectedColors.filter((filter) => filter !== value));
            }
        }

        if (name.includes("brand_")) {
            if (checked) {
              setSelectedBrands([...selectedBrands, value]);

            } else {
              setSelectedBrands(selectedBrands.filter(filter => filter !== value));
            }
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
                                    <ColorFilters onFilterChange={onFilterChange} />
                                    <BrandFilters onFilterChange={onFilterChange} />
                                </div>
                            </div>
                        </div>
                
                { error && <p>{error}</p>}
                { shop && 

                    <>
                        
                        <div className="content grid">

                            {shop.data && shop.data.length > 0 ? ( 
                                shop.data.map(product => <ShopCard {...product} key={product.id} />)
                            ) : (
                                <p>Ups! Couldn't fetch product.</p>
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