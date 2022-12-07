import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ShopCard from "../components/ShopCard";
import ColorFilters from "../components/ColorFilters";
import BrandFilters from "../components/BrandFilters";

var baseUrl = 'https://cryptic-genre-365612.appspot.com';
var url = baseUrl + '/api/products';

const Shop = () => {

    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    
    const [error, setError] = useState();
    const [shop, setShop] = useState(); 

    const fetchShop = useCallback(async () => {

        try {

            let fetchUrl = `${url}?populate[0]=Images`;

            if (selectedColors.length > 0 && selectedBrands.length === 0) {
                fetchUrl = `${url}?filters[Colors][Name][$containsi]=${selectedColors.join('&')}&populate[0]=Images`;
            }
            if (selectedColors.length === 0 && selectedBrands.length > 0) {
                fetchUrl = `${url}?filters[Brand][Name][$eq]=${selectedBrands.join('&')}&populate[0]=Images`;
            }
            if (selectedColors.length > 0 && selectedBrands.length > 0) {
                fetchUrl = `${url}?filters[Colors][Name][$containsi]=${selectedColors.join('&')}&filters[Brand][Name][$eq]=${selectedBrands.join('&')}&populate[0]=Images`;
            }
        
            const response = await axios.get(fetchUrl);
            setShop(response.data);

        } catch (err) {
            setError("Something went wrong");
        }
        
    }, [selectedColors, selectedBrands]);

    useEffect(() => { fetchShop(); }, [fetchShop]);
    
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
                            {shop.data.map(product => (
                                <ShopCard {...product} key={product.id} />
                            ))}
                        </div> 

                    </>

                }
            </article>
        </>
     );
}

export default Shop;