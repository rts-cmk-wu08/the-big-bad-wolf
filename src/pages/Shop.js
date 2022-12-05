import { useState, useEffect } from "react";
import axios from "axios";
import ShopCard from "../components/ShopCard";

var baseUrl = 'https://cryptic-genre-365612.appspot.com';
var url = baseUrl + '/api/products';

const Shop = () => {

    const [selectedFilters, setSelectedFilters] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [shop, setShop] = useState(); 


    console.log(`${url}?filters[Colors][Name][$containsi]=${selectedFilters.join('&')}&populate[0]=Images`)

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
                
                { isLoading && <p>Loading products...</p> }
                { error && <p>{error}</p>}
                { shop && 

                    <>
                        <div className="sidebar">
                            <div className="sidebar__filter">
                                <h3 className="sidebar__filter-title">Filter by</h3>
                                <div className="sidebar__filter-options">
                                    <div className="sidebar__filter-option">
                                        <input type="checkbox" id="black" name="Black" value="Black" onChange={onFilterChange} />
                                        <label htmlFor="black">Black</label>
                                    </div>
                                    <div className="sidebar__filter-option">
                                        <input type="checkbox" id="silver" name="Silver" value="Silver" onChange={onFilterChange} />
                                        <label htmlFor="silver">Silver</label>
                                    </div>
                                    <div className="sidebar__filter-option">
                                        <input type="checkbox" id="gold" name="Gold" value="Gold" onChange={onFilterChange} />
                                        <label htmlFor="gold">Gold</label>
                                    </div>
                                </div>
                            </div>

                        </div>

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