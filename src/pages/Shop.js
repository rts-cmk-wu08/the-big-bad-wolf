import { useState, useEffect } from "react";
import axios from "axios";
import ShopCard from "../components/ShopCard";
import ColorFilters from "../components/ColorFilters";

var baseUrl = 'https://cryptic-genre-365612.appspot.com';
var url = baseUrl + '/api/products';

const Shop = () => {

    const [selectedFilters, setSelectedFilters] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [shop, setShop] = useState(); 

    useEffect(() => {
        try {

            let fetchUrl = `${url}?populate[0]=Images`;	
            if (selectedFilters.length > 0) {
                fetchUrl = `${url}?filters[Colors][Name][$containsi]=${selectedFilters.join('&')}&populate[0]=Images`;
            }

            axios.get(fetchUrl) 
                .then(response => setShop(response.data))
                .finally(() => setIsLoading(false))
                .catch(error => setError(error));

        } catch (err) {
            setError("Something went wrong");
        }

    }, [selectedFilters]);

    const onFilterChange = (event) => {
        const { name, checked } = event.target;
      
        if (checked) {
          setSelectedFilters([...selectedFilters, name]);
        } else {
          setSelectedFilters(selectedFilters.filter(filter => filter !== name));
        }
    }

    return (

        <>  
            <header className="page-header">
                <h1 className="page-header__title">Products</h1>
            </header>
            
            <article className="page-content sidebar-left">

                        <div className="sidebar">
                            <div className="sidebar__filter">
                                <h3 className="sidebar__filter-title">Filter by</h3>

                                <ColorFilters onFilterChange={onFilterChange} />

                            </div>

                        </div>
                
                { isLoading && <p>Loading products...</p> }
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