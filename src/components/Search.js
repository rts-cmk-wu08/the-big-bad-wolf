import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


var baseUrl = 'https://cryptic-genre-365612.appspot.com';
var url = baseUrl + '/api/products';


const Search = () => {



//search bar
    return ( 
    <form action="/shop" className="search-form">
    <input className="search-form__input" type="search" placeholder="Search product..." name="search"/>
    <button className="search-form__button" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
    </form> 
    
);
}
 
export default Search;


  