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
                    {compCards.length > 0 ? (
                            <div className="compCard-1__info">
                                <h2>{compCards[0].attributes.Name}</h2>
                                <p>{compCards[0].attributes.Description}</p>
                            </div>
                    ) : (<p>Please select a product to compare</p>)}
                </div>
                <div className="compCard-2">
                    {compCards.length > 1 ? (
                            <div className="compCard-2__info">
                                <h2>{compCards[1].attributes.Name}</h2>
                                <p>{compCards[1].attributes.Description}</p>
                            </div>
                    ) : (<p>Please select a product to compare</p>)}
                </div>
                <div className="compCard-3">
                    {compCards.length > 2 ? (
                            <div className="compCard-2__info">
                                <h2>{compCards[2].attributes.Name}</h2>
                                <p>{compCards[2].attributes.Description}</p>
                            </div>
                    ) : (<p>Please select a product to compare</p>)}               
                </div>
            </article>
            <CompareWidget />
        </>
    );
}

export default Comparison;