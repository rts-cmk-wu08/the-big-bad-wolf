import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CompareContext } from "../contexts/CompareContext";


export const Comparison = ({product}) => {

    const [compCards, setCompCards] = useContext(CompareContext);
    console.log(compCards)


    return (
        <>
            <header className="page-header">
                <h1 className="page-header__title">Product Comparisson</h1>
            </header>
            <article className="page-content whitebox">

                <div>
                  
                </div>
            </article>
        </>
    );
}

export default Comparison;