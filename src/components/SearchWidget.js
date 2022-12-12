import React from "react";

const SearchWidget = () => {
    return ( 
        <form action="/shop" className="search-form">
            <input className="search-form__input" type="search" placeholder="Search product..." name="search"/>
            <button className="search-form__button" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form> 
    );
}
 
export default SearchWidget;