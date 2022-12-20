import { useContext } from "react";
import { CompareContext } from "../contexts/CompareContext";
import CompareWidget from "../components/CompareWidget/CompareWidget";

const Comparison = () => {

    const [compCards, setCompCards] = useContext(CompareContext);

    return (
        <>
            <header className="page-header">
                <h1 className="page-header__title">Product Comparison</h1>
            </header>
            <article className="page-content grid whitebox">

                <div className="compCard-1">
                    {/* // if compCards is not empty, then map through it and display the data of first product
                    // if compCards is empty, then display a message saying "Please select a product to compare" */}
                    {compCards.length > 0 ? (
                            <div className="compCard-1__info">
                                <h2>{compCards[0].attributes.Name}</h2>
                                <p>{compCards[0].attributes.Description}</p>
                            </div>
                    ) : (
                        <p>Please select a product to compare</p>
                    )}
                </div>
                <div className="compCard-2">
                    {/* // if compCards is > 1, then map through it and display the data of second product */}
                    {compCards.length > 1 ? (
                            <div className="compCard-2__info">
                                <h2>{compCards[1].attributes.Name}</h2>
                                <p>{compCards[1].attributes.Description}</p>
                            </div>
                    ) : (
                        <p>Please select a product to compare</p>
                    )}
                  
                </div>
                <div className="compCard-3">
                    {/* // if compCards is > 2, then map through it and display the data of third product */}
                    {compCards.length > 2 ? (
                            <div className="compCard-2__info">
                                <h2>{compCards[2].attributes.Name}</h2>
                                <p>{compCards[2].attributes.Description}</p>
                            </div>
                    ) : (
                        <p>Please select a product to compare</p>
                    )}
                  
                </div>
            </article>
            <CompareWidget />
        </>
    );
}

export default Comparison;